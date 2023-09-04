// import React from 'react'
import "../../CSS/accord.css"
import Swal from 'sweetalert2';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import React, { useState } from 'react' 
import Inovice from "../../../pages/Inovice";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { flushSync } from "react-dom";
import Paymentcard from "../Payment/PaymentCard";
import { jsPDF } from "jspdf";

const PaymentAccord = ({record,referesh,regCom,insCom,policyno,netamount,claimstatus}) => {

  const roleId = localStorage.getItem('roleId')
  let totalCommisionAmount = 0
  const [comm,setComm] = useState()

  const agentid = localStorage.getItem('genericId')
  let count = 0;
  let actual = 0;

  console.log(record)

    const paymentModule = async (referenceId)=>{
      
      // const paymentui=React.
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
                paymentModule(referenceId);
              })
   
            }else{
              Swal.fire('Confirmed!', 'Your action was successful.', 'success');
              await updateRecordBackend(referenceId)
            }
           } else if (result.dismiss === Swal.DismissReason.cancel) {
            
            Swal.fire('Cancelled', 'Your action was cancelled.', 'error');
          }
        });;
      }
      
      const downloadpopup=(e)=>{
        const pageRendererHtml = ReactDOMServer.renderToString(
          <Inovice data={e} />
        );
        Swal.fire({
          title:'Recipt',
          html:pageRendererHtml,
          showCancelButton: true,
          confirmButtonText: 'Download',
          cancelButtonText: 'Cancel',
          focusConfirm: false,
          width:"60%"
        }).then(async (result)=>{
          if (result.isConfirmed){
            const doc = new jsPDF();
            var elementHTML = pageRendererHtml.trim();
            await doc.html(elementHTML, {
              callback: function(doc) {
                  // Save the PDF
                  doc.save(`Installment_recipt.pdf`);
              },
              x: 4,
              y: 4,
              width: 205, //target width in the PDF document
              windowWidth: 650, //window width in CSS pixels
              // autoPaging:'text'
          });
          Swal.fire('Confirmed!', 'Your Recipt Downloaded.', 'success');

          }
        })
      }
      const updateRecordBackend = async (referenceId)=>{
            try {

                let response = await axios.post(`http://localhost:8080/maxlife/updaterecord/${referenceId}`)
                Swal.fire(
                  'Payment Successfull..!',
                  'Your payment has been processed',
                  'success'
                )
                Swal.fire(
                    'Good job!',
                    response.data,
                    'success'
                  )
                  referesh()
            } catch (error) {
                alert(error.message)
            }
      }

    let payData
    if(record.length>0){
        payData = record.map((e,index)=>{
          actual++
          if(e.paiddate){
            count++
          }
            return (
                <tr>
                    <td>{e.installmentno}</td>
                    <td>Rs. {e.installmentamount}</td>
                    <td>{e.duedate}</td>

                    
                   
                   {roleId === '1' ?(
                    <td>{e.paiddate ? (e.paiddate) : (
                            <button  type="button" className="btn btn-danger"
                            onClick={()=>paymentModule(e.referenceid)}>Pay</button>
                        )}
                    </td>):(e.paiddate ? (<td>{e.paiddate}</td>) : (
                            <td><button  type="button" className="btn btn-danger"
                            >Ask to Pay</button></td>
                        ))}

                    <td>{e.paymentstatus}</td>
                    <td>{e.paiddate ? ( <button onClick={()=>{downloadpopup(record[index]);console.log(e,"payment details")}}>Download</button>) : (
                            <p/>
                        )}</td>

                      {roleId === '4' && e.paiddate !==null ?( 
                        e.installmentno == '1'? 
                        ( e.withdrawstatus == 'Pending' ? totalCommisionAmount=parseFloat(e.installmentamount * regCom * 0.01) : null , <td>Rs. {e.installmentamount*regCom*0.01}  | ({regCom})%</td> )
                        :( e.withdrawstatus == 'Pending' ? totalCommisionAmount=parseFloat(e.installmentamount * insCom * 0.01) :null, <td>Rs. {e.installmentamount*insCom*0.01} | ({insCom})% </td>)
                        
                      ):null}  

                      { roleId === '4' && e.paiddate !==null ?( 
                       <td>
                       {e.withdrawstatus == 'Pending' ? (
                         <button type="button" className="btn btn-danger" onClick={()=>withdrawBackend(e.referenceid,totalCommisionAmount)}>
                           Withdraw
                         </button>
                       ) : (
                         e.withdrawstatus
                       )}
                     </td>
                      ):null}  

                    
                     
                </tr>
            )
        })
    }

    const withdrawBackend = async (referenceid,amount)=>{

      await Swal.fire({
        title: `Do you want to withdraw Rs ${amount}?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Withdraw',
      }).then((result) => {
        if (result.isConfirmed) {
         
        } else if (result.isDenied) {
          return
        }
        
      })

      console.log(referenceid,amount,agentid)
      try {

        let response = await axios.post(`http://localhost:8080/maxlife/withdraw/${referenceid}/${amount}/${agentid}`)
        // alert(response.data)
        
        Swal.fire('Visit your portfolio..!', response.data, 'success')
        console.log(response.data,'see me bittu')
        referesh()
      } catch (error) {
        alert(error.message)
      }
    }

    const claimBackend = async ()=>{

      await Swal.fire({
        title: `Do you want to Claim Rs ${netamount}?`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Withdraw',
      }).then((result) => {
        if (result.isConfirmed) {
         
        } else if (result.isDenied) {
          return
        }
        
      })

      try {
        let customerid = localStorage.getItem('genericId')
        let response = await axios.post(`http://localhost:8080/maxlife/claim/${policyno}/${netamount}/${customerid}`)
        Swal.fire('Visit your portfolio..!', response.data, 'success')
        referesh()
      } catch (error) {
        alert(error.message)
      }
    }

  return (
    
    <div className="accordion-tab"  >
    <input id={record[0].referenceid} type="checkbox" className="accordion-toggle" name="toggle" />
    <label for={record[0].referenceid} className='l-bg-blue-dark' style={{backgroundColor:'#11101D'}} >Payment Details</label>

        <div className="accordion-content">
        <table className="table  table-bordered  table-striped text-center">
                <thead>
                <tr style={{fontSize:'14px'}}>
                    <th scope="col">Installment No</th>
                    <th scope="col">Installment Amount</th>
                    <th scope="col">Due Date</th>
                    
                    <th scope="col">Paid Date</th>
                    <th scope="col">Payment Status</th>
                    <th scope="col">Receipt</th>
                    {roleId === '4' ? <th scope="col">Commision</th> : null}
                    {roleId === '4' ? <th scope="col">Widhdraw</th> : null}
                    

                </tr>
                </thead>
                <tbody>
                    {payData}
                  
                    </tbody>
        </table>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        {roleId === '4' ?  <button  type="button" className="btn btn-success"
                            >Withdraw Your Commision Rs. {totalCommisionAmount}</button>:null}

        {roleId === '1' && claimstatus == 'Pending' ?  (actual == count ? 
        (<button onClick={claimBackend} type="button" className="btn btn-success">Claim Rs. {netamount}</button>)
                            :(<button disabled='true' type="button" className="btn btn-success"
                            >Claim Rs. {netamount}</button>)):null}
        </div>
        

          

        </div>
    </div>
  )
}

export default PaymentAccord
