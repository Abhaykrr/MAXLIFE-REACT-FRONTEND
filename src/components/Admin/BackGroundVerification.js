import React, { useEffect, useState } from 'react'
import Navbar from '../Shared Components/Navbar/Navbar'
import axios from 'axios'
import Pagination from '../Shared Components/Page/Pagination'
import Swal from 'sweetalert2'

const BackGroundVerification = () => {

    const [pages,setPages] = useState()
    const [currpage,setCurrpage] =useState(0)
    const [pagesize,setPageSize] = useState(5);
    const [alldocs,setAlldocs] = useState({})
    const [searchText,setSearchText]=useState("");


    const getAllCustomerDocuments = async ()=>{
        try {

            try{
                const response = await axios.get('http://localhost:8080/maxlife/bgv', {
                      params: {
                        pageno: currpage,
                        pagesize: pagesize
                      }
                    });
                    console.log(response.data,"bgv");
                    setPages(response.data.totalPages-1)
                  setAlldocs(response.data.content);
              }catch(e){
                alert(e.message);
              }
            
        } catch (error) {
            alert(error.message)
        }
    }


    useEffect(()=>{
        getAllCustomerDocuments()
    },[currpage,pagesize])

    const verifyCustomerBackend = async(customerId)=>{
      alert(customerId)
        try {

            const response = await axios.get('http://localhost:8080/maxlife/bgv/verify',{
                params: {
                 customerid:customerId
                }
              });

              Swal.fire({
                title: 'Verification Successfull!',
                text: response.data,
                icon: 'success'
              });
            
        } catch (error) {
            alert(error.message)
        }
        getAllCustomerDocuments()
    }

    return (
        <div>
             <Navbar />
                <section className="home-section" id="adminContent">
                  <h4>Background Verification</h4>
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
                     <input type='text' onChange={(e)=>{setSearchText(e.target.value)}} className="form-control"  placeholder='Enter claimis,claim amout,Date,status'/></div>
                                    
                                    </h4>
                
                                    <div className="col-md-12 ">
            <div className="row card card-cascade wider" style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            
            
          {alldocs?.length>0?<>
            <table class="table  table-bordered  table-striped mt-4" style={{width:"70rem"}} >
        <thead>
          <tr>
          <th>Document Id</th>
            <th>File Name</th>
            <th>File Type</th>
            <th>Customer Id</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          
            {
                alldocs?.map((docx,index)=>{
                    return(
                        <tr>
                          <td>{docx.id}</td>
                          <td><a href={`http://localhost:8080/maxlife/image/401/${docx.customer?.customerid}`}>{docx.name}</a></td>
                          <td>{docx.type}</td>
                          <td>{docx.customer?.customerid}</td>
                         
                          <td>{docx.status == 'Pending' ? (<button type="button" className="btn btn-danger" onClick={()=>verifyCustomerBackend(docx.customer.customerid)}>
                               Verify
                             </button>): (docx.status)}</td>
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

export default BackGroundVerification
