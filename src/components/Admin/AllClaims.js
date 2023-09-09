import React, { useState,useEffect } from 'react'
import Navbar from '../Shared Components/Navbar/Navbar'
import axios from 'axios';
import Pagination from '../Shared Components/Page/Pagination';
import Swal from 'sweetalert2';
const AllClaims = () => {
  const [claims,setClaims]=useState();
  const [pages,setPages] = useState()
  const [currpage,setCurrpage] =useState(0)
  const [pagesize,setPageSize] = useState(5);
  const [searchText,setSearchText]=useState("");
const[status,setStatus] = useState('Active')

async function getclaims(){
  try{
    const response = await axios.get('http://localhost:8080/maxlife/allclaims', {
          params: {
            inputtext:searchText,
            status:status,
            currpage: currpage,
            pagesize: pagesize
          }
        });
        // let response=await getpageAgents(currpage);
        console.log(response.data,"from all cliams");
        setPages(response.data.totalPages-1)
      setClaims(response.data.content);
  }catch(e){
    alert(e.message);
  }
}
useEffect(()=>{
  getclaims();
},[currpage,status,pagesize,searchText])

const approve = async(claimid)=>{

  await Swal.fire({
    title: 'Are you sure?',
    text: "Do you want to approve payment ?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, Approve'
  }).then(async(result) => {
    if (result.isConfirmed) {

      try {
        let response = await axios.post(`http://localhost:8080/maxlife/approveclaim/${claimid}`)
        // alert(response.data)
        Swal.fire(
          'Payment Approved!',
          response.data,
          'success'
        )
        
      } catch (error) {
        alert(error.message)
      }
     
    }
  })

  getclaims()
   
}






  return (
    <div>
         <Navbar />
            <section className="home-section" id="adminContent">
              <h4>All Claims</h4>
            <h4>
              <div style={{display:'inline-block',width:'100px',marginRight:"1rem",height:'50px',borderRadius:'10px'}}> <select onChange={(e)=>setPageSize(e.target.value)} className="form-control text-center"   id="planStatus" >
                                    <option value="5">5 Items</option>
                                    <option value="10">10 Items</option>
                                    <option value="15">15 Items</option>
              </select></div>

              {/* <div style={{display:'inline-block',width:'100px',marginRight:"1rem",height:'50px',borderRadius:'10px'}}> <select onChange={(e)=>setStatus(e.target.value)} className="form-control text-center"   id="planStatus" >
                                    <option value="Active">Active</option>
                                    <option value="InActive">In Active</option>
              </select></div> */}
              <div style={{display:'inline-block',width:'300px',marginRight:"1rem",height:'50px',borderRadius:'10px'}}>
                 <input type='text' onChange={(e)=>{setSearchText(e.target.value)}} className="form-control"  placeholder='Enter claim id,claim amount,Date,status'/></div>
                                
                                </h4>
            
                                <div className="col-md-12 ">
        <div className="row card card-cascade wider" style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        
        
      {claims?.length>0?<>
        <table class="table  table-bordered  table-striped mt-4" style={{width:"70rem"}} >
    <thead>
      <tr>
      <th>Claim id</th>
        <th>Agent id/Customer id</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Account No</th>
        <th>IFSC Code</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Status</th>
        {/* <th>View</th> */}
      </tr>
    </thead>
    <tbody>
      
        {
            claims?.map((claim,index)=>{
                return(
                    <tr>
                      <td>{claim.claimid}</td>
                      <td>{claim.agent?claim.agent?.agentid+"( Agent )":claim.customer?.customerid+" (Self) "}</td>
                      <td>{claim.agent?claim.agent?.firstname:claim.customer?.firstname}</td>
                      <td>{claim.agent?claim.agent?.lastname:claim.customer?.lastname}</td>
                      <td>{claim.bankaccountnumber}</td>
                      <td>{claim.bankifsccode}</td>
                      <td>{claim.claimamount}</td>
                      <td>{claim.date}</td>
                      <td>{claim.status == 'Pending' ? (<button type="button" className="btn btn-danger" onClick={()=>approve(claim.claimid)}>
                           Approve
                         </button>): (claim.status)}</td>
                      {/* <td><a class="btn" onClick={()=>{setParticularAgentId(agent.agentid)}} >More Info</a></td> */}
                    </tr>
                )
            })
        }
          </tbody>
  </table>
  <div style={{display:'flex',justifyContent:'center'}}>
                  <h1><Pagination pages={pages} currpage={currpage} setCurrpage={setCurrpage}/></h1>
                </div>
     
      
      
      </>:<h2>No Record Found</h2>}
   
  
       

  
        

     
        </div>
        </div>
        
            </section>
      
    </div>
  )
}

export default AllClaims
