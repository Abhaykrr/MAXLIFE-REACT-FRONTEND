import React, { useEffect, useState } from 'react'
import Navbar from '../Shared Components/Navbar/Navbar'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { getPageCustomer } from '../Util/CApis'
import Pagination from '../Shared Components/Page/Pagination'
import axios from 'axios'
import UserAccounts from './UserAccounts'


function Adminusers(){
    const [customers,setCustomers]=useState();
    const [pages,setPages] = useState()
    const [currpage,setCurrpage] =useState(0)
    const [pagesize,setPageSize] = useState(5);
    // const[status,setStatus] = useState('Active')

    const [particularCustomerId,setParticularCustomerId] = useState(0)
    const [particularCustomerName,setParticularCustomerName] = useState()
    const [searchText,setSearchText]=useState("");
    const [data,setData] = useState()

   
    const userAccount = ()=>{
      console.log("I was called ")
       setData(<UserAccounts custId={particularCustomerId}/>)
       console.log(data)
    }

    useEffect(()=>{
      userAccount()
    },[particularCustomerId])

    const allusers = async()=>{
        try {
         
            // let response = await getPageCustomer(currpage);
            let response;
            if(searchText==""){
              response=await axios.get('http://localhost:8080/maxlife/getpagecustomer', {
                params: {
                  
                
                  currpage: currpage,
                  pagesize: pagesize
                }
              });
            }else{
              response=await axios.get('http://localhost:8080/maxlife/getfiltercustomer', {
                params: {
                  
                  inputtext:searchText,
                  currpage: currpage,
                  pagesize: pagesize
                }
              });
            }
            // console.log(response.data)
            setCustomers(response.data.content);
            setPages(response.data.totalPages-1)
          
            
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(()=>{
        allusers();
        
    },[currpage,pagesize,searchText])


return (
<div>
      <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />

      </Helmet>
      <Navbar/>
      <section style={{backgroundColor:'white',display:'inline-block',overflow:'auto',height:'auto',maxWidth:'100%'}} className="home-section" id="userContent">
      <p>CID {particularCustomerId} {particularCustomerName}</p>
      <h3>All Customers</h3>
        <h4>
              <div style={{display:'inline-block',width:'100px',marginRight:"1rem",height:'50px',borderRadius:'10px'}}> <select onChange={(e)=>setPageSize(e.target.value)} className="form-control text-center"   id="planStatus" >
                                    <option value="5">5 Items</option>
                                    <option value="10">10 Items</option>
                                    <option value="15">15 Items</option>
              </select></div>

              
              <div style={{display:'inline-block',width:'300px',marginRight:"1rem",height:'50px',borderRadius:'10px'}}>
                 <input type='text' onChange={(e)=>{setSearchText(e.target.value)}} className="form-control"  placeholder='Enter email,phone,name etc.'/></div>
                                
                                </h4>
                                <div className="col-md-12 ">
        <div className="row card card-cascade wider" style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        
        
      {
        customers?.length>0?<>
        <table class="table  table-bordered  table-striped mt-4" style={{width:"70rem"}} >
    <thead>
      <tr>
        <th>Customer id</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Mobile</th>
        <th>View</th>
      </tr>
    </thead>
    <tbody>
        {
            customers?.map((customer,index)=>{
                return(
                    <tr>
                      <td>{customer.customerid}</td>
                      <td>{customer.firstname}</td>
                      <td>{customer.lastname}</td>
                      <td>{customer.email}</td>
                      <td>{customer.mobile}</td>
                      <td><a class="btn" onClick={()=>{ setParticularCustomerId(customer.customerid); setParticularCustomerName(customer.firstname)}}>More Info</a></td>
                    </tr>
                )
            })
        }
        
        </tbody>
  </table>
  <div style={{display:'flex',justifyContent:'center'}}>
                  <h1><Pagination pages={pages} currpage={currpage} setCurrpage={setCurrpage}/></h1>
                </div>
        </>:"No Record Found"
      }
    
    
       

  
        

    
        </div>
        </div>
        
      

      {/* <div style={{display:'flex',alignItems:'center',justifyContent:'center' }} >
                    {particularAgentId && <AgentCustomers agId={particularAgentId}/>}
                  </div> */}

      
  
                
      </section>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:"100%" }} >
                      {/* {particularCustomerName} Accounts */}
                    {particularCustomerId && <UserAccounts custId={particularCustomerId}/>}
                  </div>

      
    </div>


);

}

export default Adminusers;