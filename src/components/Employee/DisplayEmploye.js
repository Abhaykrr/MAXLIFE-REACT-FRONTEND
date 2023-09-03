import React, { useEffect, useState } from 'react'
import Navbar from '../Shared Components/Navbar/Navbar'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { getpageEmployee } from '../Util/CApis'
import Pagination from '../Shared Components/Page/Pagination'
import axios from 'axios'

function AdminEmployes(){
    const [employes,setEmployes]=useState();
    const [pages,setPages] = useState()
    const [searchText,setSearchText]=useState("");
    const [currpage,setCurrpage] =useState(0)
    const [pagesize,setPageSize] = useState(5);
    const[status,setStatus] = useState('Active')
 
    const allemploye = async()=>{
        try {
         
            // let response = await getpageEmployee(currpage);
            let response;
            if(searchText==""){
             response = await axios.get('http://localhost:8080/maxlife/getemploye', {
                params: {
                  
                  status:status,
                  currpage: currpage,
                  pagesize: pagesize
                }
              });
            }else{
              response=  await axios.get('http://localhost:8080/maxlife/getfilteremploye', {
                params: {
                  inputtext:searchText,
                  status:status,
                  currpage: currpage,
                  pagesize: pagesize
                }
              });
            }
            console.log(response.data.content.length,"length of response")
            setEmployes(response?.data.content)
            setPages(response.data.totalPages-1)
          
           
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(()=>{
        allemploye()
        
    },[currpage,pagesize,status,searchText])


return (
<div>
      <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />

      </Helmet>
      <Navbar/>
      <section className="home-section" id="userContent">
      <h3>All Employes</h3>
        <h4>
              <div style={{display:'inline-block',width:'100px',marginRight:"1rem",height:'50px',borderRadius:'10px'}}> <select onChange={(e)=>setPageSize(e.target.value)} className="form-control text-center"   id="planStatus" >
                                    <option value="5">5 Items</option>
                                    <option value="10">10 Items</option>
                                    <option value="15">15 Items</option>
              </select></div>

              <div style={{display:'inline-block',width:'100px',marginRight:"1rem",height:'50px',borderRadius:'10px'}}> <select onChange={(e)=>setStatus(e.target.value)} className="form-control text-center"   id="planStatus" >
                                    <option value="Active">Active</option>
                                    <option value="InActive">In Active</option>
              </select></div>
              <div style={{display:'inline-block',width:'300px',marginRight:"1rem",height:'50px',borderRadius:'10px'}}>
                 <input type='text' onChange={(e)=>{setSearchText(e.target.value)}} className="form-control"  placeholder='Enter email,phone,name etc.'/></div>
                                
                                </h4>
                                <div className="col-md-12 ">
        <div className="row card card-cascade wider" style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        
      
      {
        employes?.length>0?<>
        {
            <table class="table  table-bordered  table-striped mt-4" style={{width:"70rem"}} >
            <thead>
              <tr>
                <th>Employe id</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Salary</th>
                <th>Status</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
        {
            employes?.map((employe,index)=>{
                return(
                    <tr>
                      <td>{employe.employeeid}</td>
                      <td>{employe.firstname}</td>
                      <td>{employe.lastname}</td>
                      <td>{employe.salary}</td>
                      <td>{employe.status}</td>
                      <td><a class="btn">More Info</a></td>
                    </tr>
                )
            })
          }
           </tbody>
  </table>
  
        }
        <div style={{display:'flex',justifyContent:'center'}}>
                  <h1><Pagination pages={pages} currpage={currpage} setCurrpage={setCurrpage}/></h1>
                </div>
        
        
        </>:"No Record Found"
      }
    
   
     
       

  
        

     
        </div>
        </div>
        
      </section>

      {/* <div style={{display:'flex',alignItems:'center',justifyContent:'center' }} >
                    {particularAgentId && <AgentCustomers agId={particularAgentId}/>}
                  </div> */}

      
    </div>

);

}

export default AdminEmployes;