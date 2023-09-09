import axios from 'axios'
import React, { useEffect, useState } from 'react' 
import Swal from 'sweetalert2'
import { getallAgents } from '../../Util/CApis'
import swal from 'sweetalert'
import ReactDOMServer from 'react-dom/server';
import Paymentcard from '../Payment/PaymentCard'

const AccordLine = ({scheme}) => {

  const defaultUrl = `https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg?auto=compress&cs=tinysrgb&w=1600`
  const actualUrl = ''

  const [noOfYear,setNoOfYear] = useState()
  const [investmentAmount,setInvestmentAmount] = useState()
  const [month,setMonth] = useState()
  const [report,setReport] = useState()


  const [allAgents,setAllAgents] = useState({})
  const [agentId,setAgentId] = useState(69)

  const getAgents = async ()=>{

    try {

      let response =  await getallAgents()
      // setAgentId(99)
      setAllAgents(response.data)
      console.log(response.data)
      
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(()=>{
      getAgents()
  },[])


  let agentsDropdown
  if(allAgents.length>0){
      agentsDropdown = allAgents.map((agent)=>{
          if(agent.status === "Active")
          return (
              <option value={agent.agentid}>{agent.firstname}  {agent.agentid}</option>
          )
      })
  }


  const paymentModule = async (totalNoOfInstallments,installmentAmount,intrestAmount)=>{
    
    const roleName = localStorage.getItem('roleName')
    if(roleName==null || roleName == undefined || roleName ===null){
      alert("Please Login")
      return
    }
    if(roleName!='ROLE_CUSTOMER'){
      alert("You should be a customer to buy policy")
      return
    }
    const pageRendererHtml2 = ReactDOMServer.renderToString(
      <Paymentcard />
    );
      Swal.fire({
        title: 'Enter Payment Details',
        html:
        pageRendererHtml2,
        showCancelButton: true,
        confirmButtonText: 'Submit',
        cancelButtonText: 'Cancel',
        focusConfirm: false,
        width:"40%",
        
      }).then(async (result) => {
        if (result.isConfirmed) {
          console.log(result,"swal results")
             const cardNumber = document.getElementById('card-number').value;
          const expiry = document.getElementById('expiry').value;
          const cvv = document.getElementById('cvv').value;
          // const form = document.getElementById('myForm');
          // form.addEventListener('submit', (e)=>{ console.log(e,"on form submit")});
          // form.submit();
          // console.log(cardNumber,expiry,cvv);
          if(expiry.length!=5||cardNumber.length!=12||cvv.length!=3){
            Swal.fire('Invalid Input', 'Enter Valid Field.', 'error').then((result)=>{
              if (result.isConfirmed)
              paymentModule(totalNoOfInstallments,installmentAmount,intrestAmount);
            })
 
          }else{
            await addPolicyBackend(totalNoOfInstallments,installmentAmount,intrestAmount)
        Swal.fire({
          title: 'Payment Successful!',
          text: 'Your payment has been processed.',
          icon: 'success'
        });
          }
         } else if (result.dismiss === Swal.DismissReason.cancel) {
          
          Swal.fire('Cancelled', 'Your action was cancelled.', 'error');
        }
      });
    // Swal.fire({
    //   title: 'Enter Payment Details',
    //   html:
    //     ` 
    //     <input type="text" id="card-number" placeholder="Card Number" required>
    //     <input type="text" id="expiry" placeholder="Expiry Date (MM/YY)" required>
    //     <input type="text" id="cvv" placeholder="CVV" required>`,
    //   showCancelButton: true,
    //   confirmButtonText: 'Submit',
    //   cancelButtonText: 'Cancel',
    //   focusConfirm: false,
    //   preConfirm: async () => {
    //     const cardNumber = document.getElementById('card-number').value;
    //     const expiry = document.getElementById('expiry').value;
    //     const cvv = document.getElementById('cvv').value;


        
        
    //     await addPolicyBackend(totalNoOfInstallments,installmentAmount,intrestAmount)
    //     Swal.fire({
    //       title: 'Payment Successful!',
    //       text: 'Your payment has been processed.',
    //       icon: 'success'
    //     });
    //   }
    // });
  }


  const addPolicyBackend = async (totalNoOfInstallments,installmentAmount,intrestAmount)=>{
    // const roleName = localStorage.getItem('roleName')
    // if(roleName==null || roleName == undefined || roleName ===null){
    //   alert("Please Login")
    //   return
    // }
    // if(roleName!='ROLE_CUSTOMER'){
    //   alert("You should be a customer to buy policy")
    //   return
    // }

    const customerId = localStorage.getItem('genericId')
    const schemeId = scheme.schemeid

    console.log('------')
    console.log(customerId)
    console.log(schemeId)
    console.log(agentId,"AgentId")

    try {

      let response = await axios.post(`http://localhost:8080/maxlife/addpolicy/${schemeId}/${customerId}/${agentId}`,{
          premeiumtype:month,
          noofinstallments:totalNoOfInstallments,
          amount:investmentAmount,
          interestamount:intrestAmount,
          premeiumamount:installmentAmount,
          status:"Active"
      })

      alert(response.data)
      
    } catch (error) {
      alert(error.message)
    }
  }


  const generateDetails = async (e)=>{
    e.preventDefault();
    console.log(noOfYear)
    console.log(investmentAmount)
    console.log(month)
    console.log(scheme.profitratio)
    if(month==undefined||month==0){
      swal("Invalid Installment Months","Select months from dropdown" , "error");
      return;
    }
    const interestRate = scheme.profitratio; // Assuming scheme.profitratio holds the interest rate


    const totalMonths = noOfYear * 12;

    const totalNoOfInstallments = (totalMonths/month)
    const installmentAmount = (investmentAmount/totalNoOfInstallments)
    const intrestAmount = (scheme.profitratio/100)*(investmentAmount)
    const netAmount = parseFloat(investmentAmount)+ parseFloat(intrestAmount)

 

    const generatedReport = (
      <tr>
        <td>{totalNoOfInstallments}</td>
        <td>{installmentAmount}</td>
        <td>{intrestAmount}</td>
        <td>{netAmount}</td>

        <td><button onClick={()=>paymentModule(totalNoOfInstallments,installmentAmount,intrestAmount)} style={{borderRadius:'0px',backgroundColor:'#3b5d50'}} type="button" class="btn btn-success">Buy</button></td>
      </tr>
    );

    setReport(generatedReport);
  }



  return (
    <div className="accordion-tab">

    <input id={scheme.schemeid} type="checkbox" className="accordion-toggle" name="toggle" />
    <label for={scheme.schemeid}>{scheme.schemename} </label>
    <div className="accordion-content">
    <form class="needs-validation" novalidate
               onSubmit={(e)=>generateDetails(e)}
               >
      <br/>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <p>{scheme.schemename}</p>
                    <p>{scheme.description}</p>
                </div>
                <div class="col-md-6">
                  
                <img style={{
                    width: '500px',
                    height: '250px',
                    borderRadius: '10px',
                    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' // Change the values as needed
                    
                  }}
                  
                  id={scheme.schemeid+"img"}
                  onError={()=>{
                    // document.getElementById(`${scheme.schemeid}+img`)?.src=defaultUrl;

                  }}
                  
                  
                  src={`http://localhost:8080/maxlife/image/${scheme.schemeid}/401`} alt="" class="img-fluid" />

                </div>
            </div>
        </div><br />


        <table className="table  table-bordered  table-striped text-center">
                <thead>
                <tr style={{fontSize:'14px'}}>
                    <th scope="col">Min Amount</th>
                    <th scope="col">Max Amount</th>
                    <th scope="col">Min Time</th>
                    <th scope="col">Max Time</th>
                    <th scope="col">Min Age</th>
                    <th scope="col">Max Age</th>
                    <th scope="col">Profit Ratio</th>
                    <th scope="col">Reg. Comm</th>
                    <th scope="col">Inst. Comm</th>

                </tr>
                </thead>
                    <tbody>
                    <tr>
{/*                         
schemeimageurl
status
 */}
                        <td>{scheme.minamount} </td>
                        <td>{scheme.maxamount}</td>
                        <td>{scheme.mininvestmenttime}</td>
                        <td>{scheme.maxinvestmenttime}</td>
                        <td>{scheme.minage}</td>
                        <td>{scheme.maxage}</td>
                        <td>{scheme.profitratio}</td>
                        <td>{scheme.registrationcommision}</td>
                        <td>{scheme.installmentcommision}</td>
                        
                      </tr>
                    </tbody>
        </table>

        <table className="table  table-bordered  table-striped text-center">
                <thead style={{backgroundColor:'black'}}>
                <tr style={{fontSize:'14px'}}>
                    <th scope="col">No of Years</th>
                    <th scope="col">Total Investment Amount</th>
                    <th scope="col">Months</th>
                    <th scope="col">Agent ?</th>
                    <th scope="col">Calculate</th>
                </tr>
                </thead>
                {/*  */}
                    <tbody>
                    <tr>
                    
                        <td><input  className="form-control text-center" min={scheme.mininvestmenttime} max={scheme.maxinvestmenttime} required onChange={(e)=>{setNoOfYear(e.target.value)}} style={{height:'50px',width:'100%'}} type="number" placeholder='  Enter Duration' /></td>
                        <td><input  className="form-control text-center" required min={scheme.minamount} max={scheme.maxamount} onChange={(e)=>{setInvestmentAmount(e.target.value)}} style={{height:'50px',width:'100%'}} type="number" placeholder='  Enter Investment Amount'  /></td>
                        <td> <select className="form-control text-center" required min={1}  id="planStatus" onChange={(e)=>setMonth(e.target.value)}>
                                    <option value="0">Select Month</option>
                                    <option value="3">3 Month</option>
                                    <option value="6">6 Month</option>
                                    <option value="12">12 Month</option>
                                </select></td>

                         <td> <select className="form-control text-center" required id="planStatus" onChange={(e)=>{
                          // console.log(e.target.value)
                          
                          setAgentId(e.target.value)}}>
                                                    <option value="69">Self</option>
                                                    {agentsDropdown}
                              </select>
                        </td>
                        <td className='text-center'><button type="submit" style={{borderRadius:'0px',backgroundColor:'#3b5d50'}} class="btn btn-success" >Calculate</button></td>
                     
                      </tr>
                    </tbody>
                    {/* */}
        </table>

        <table className="table  table-bordered  table-striped text-center">
                <thead>
                <tr style={{fontSize:'14px',borderRadius:'0px'}}>
                    <th scope="col">Installments</th>
                    <th scope="col">Installment Amount</th>
                    <th scope="col">Interest Amtount</th>
                    <th scope="col">Total Amount</th>
                    <th scope="col">Buy Policy</th>
                </tr>
                </thead>
                    <tbody>
                    {report}
                    {/* <tr>
                     
                        <td>2</td>
                        <td>101</td>
                        <td>101</td>
                        </tr> */}
                    </tbody>
        </table>
        </form> 
    </div>
</div>
  )
}

export default AccordLine
