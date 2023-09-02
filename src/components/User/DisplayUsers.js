import React, { useEffect, useState } from 'react'
import Navbar from '../Shared Components/Navbar/Navbar'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { getPageCustomer } from '../Util/CApis'
import Pagination from '../Shared Components/Page/Pagination'

import UserAccounts from './UserAccounts'


function Adminusers(){
    const [customers,setCustomers]=useState();
    const [pages,setPages] = useState()
    const [currpage,setCurrpage] =useState(0)
    const pagesize = 8;

    const [particularCustomerId,setParticularCustomerId] = useState(0)
    const [particularCustomerName,setParticularCustomerName] = useState()
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
         
            let response = await getPageCustomer(currpage);
            // console.log(response.data)
            setCustomers(response.data.content);
            setPages(response.data.totalPages-1)
          
            
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(()=>{
        allusers();
        
    },[currpage])


return (
<div>
      <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />

      </Helmet>
      <Navbar/>
      <section style={{backgroundColor:'white',display:'inline-block',overflow:'auto',height:'auto',maxWidth:'100%'}} className="home-section" id="userContent">
      <p>CID {particularCustomerId} {particularCustomerName}</p>
      <div className="col-md-12 ">
        <div className="row ">
     
        {
            customers?.map((customer,index)=>{
                return(
<div class="col">
<div style={{width:"16rem"}}>
<div class="card card-cascade wider" onClick={()=>{ setParticularCustomerId(customer.customerid); setParticularCustomerName(customer.firstname)}}>

  {/* <!-- Card image --> */}
  <div class="view view-cascade overlay text-center">
  <img alt="image" style={{width:"40%",marginTop:"1rem"}} class="rounded-circle img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar1.png"/>
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  {/* <!-- Card content --> */}
  <div class="card-body card-body-cascade text-center pb-0">

    {/* <!-- Title --> */}
    <h4 class="card-title"><strong>{customer.firstname} {customer.lastname}</strong></h4>
    
    {/* <!-- Text --> */}
    <p class="card-text">Address:- {customer.street+", "+customer.city+", "+customer.state+", "+customer.zipcode}</p>
    <p class="card-text">Age:- {customer.age}</p>

    <div class="card-footer text-muted text-center mt-4">
      Contact: {customer.mobile} , {customer.email}
    </div>

  </div>

</div>
{/* <!-- Card Wider --> */}

</div>
</div>
                )
            })
        }
     

  
        

       
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
                  <h1><Pagination pages={pages} currpage={currpage} setCurrpage={setCurrpage}/></h1>
                </div>

                {/* {data} */}
                {/* {useEffect(()=>{
                  <UserAccounts custId={particularCustomerId}/>
                },[particularCustomerId])} */}
                
      </section>
                    <div style={{display:'flex',alignItems:'center',justifyContent:'center' }} >
                      {/* {particularCustomerName} Accounts */}
                    {particularCustomerId && <UserAccounts custId={particularCustomerId}/>}
                  </div>

      
    </div>


);

}

export default Adminusers;