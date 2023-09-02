import React, { useEffect, useState } from 'react'
import Navbar from '../Shared Components/Navbar/Navbar'

import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { getpageEmployee } from '../Util/CApis'
import Pagination from '../Shared Components/Page/Pagination'


function AdminEmployes(){
    const [employes,setEmployes]=useState();
    const [pages,setPages] = useState()
    const [currpage,setCurrpage] =useState(0)
    const pagesize = 8;
    const allemploye = async()=>{
        try {
         
            let response = await getpageEmployee(currpage);
            // console.log(response.data)
            setEmployes(response?.data.content)
            setPages(response.data.totalPages-1)
          
           
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(()=>{
        allemploye()
        
    },[currpage])


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
            employes?.map((employ,index)=>{
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
    <h4 class="card-title"><strong>{employ.firstname} {employ.lastname}</strong></h4>
    
    <p class="card-text">Salary:- {employ.salary}</p>

    <div class="card-footer text-muted text-center mt-4">
      Status: {employ.status}
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
        
      </section>

      
    </div>


);

}

export default AdminEmployes;