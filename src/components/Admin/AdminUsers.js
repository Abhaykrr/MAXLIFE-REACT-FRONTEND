import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { getAllCustomer } from '../Util/CApis'



function Adminusers(){
    const [customers,setCustomers]=useState();
    const allusers = async()=>{
        try {
            let response = await getAllCustomer()
            console.log(response.data)
            setCustomers(response.data)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(()=>{
        allusers();
        
    },[])


return (
<div>
      <Helmet>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />

      </Helmet>
      <Navbar/>
      <section className="home-section" id="userContent">
      <div className="col-md-12 ">
        <div className="row ">
     
        {
            customers?.map((customer,index)=>{
                return(
<div class="col">
<div style={{width:"16rem"}}>
<div class="card card-cascade wider">

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
      </section>

      
    </div>


);

}

export default Adminusers;