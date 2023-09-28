import axios from 'axios';
import React, { useState } from 'react'
import swal from 'sweetalert';

const Signup = () => {
    const [userdata,setuserdata]=useState({email:"",password:"",firstname:"",lastname:""})
    const [passwordsec,setpasswordsec]=useState({type:"password",clas:""})
    function viewpassword(e){
      // e.preventDefault();
      if(passwordsec.type=="password")setpasswordsec({...passwordsec,type:"text"})
      if(passwordsec.type=="text")setpasswordsec({...passwordsec,type:"password"})
      
    }
    function handlesubmit(){
        console.log(userdata);

        try {

          let response = axios.post('http://localhost:8080/maxlife/api/auth/register',{
            username:userdata.email,
            password:userdata.password,

            role:"ROLE_CUSTOMER",
            customer:{
              firstname:userdata.firstname,
              lastname:userdata.lastname
            }

          })
          console.log(response.data)

          swal("Good job!", "Register Successfull...!", "success")
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          
        } catch (error) {
          alert(error.message)
        }
    }
  return (
    <>
    {/* <!-- Default form login --> */}
<form class="text-center border rounded-10 border-light p-4" action="#!">

    <p class="h4 mb-2">Sign up</p>
    <input   class="form-control mb-2" placeholder="First Name"
    onChange={(e)=>{setuserdata({...userdata,firstname:e.target.value})}}
    required
    />
    <input   class="form-control mb-2" placeholder="Last Name"
    required
    onChange={(e)=>{setuserdata({...userdata,lastname:e.target.value})}}
    />
    {/* <!-- Email --> */}
    <input type="text"  class="form-control mb-2" placeholder="Username"
    required
    onChange={(e)=>{setuserdata({...userdata,email:e.target.value})}}
    />

    {/* <!-- Password --> */}
    {/* <input type="password"  class="form-control mb-2" placeholder="Password"
    required
    onChange={(e)=>{setuserdata({...userdata,password:e.target.value})}}
    /> */}
    <div>
    <input type={passwordsec.type} id="defaultLoginFormPassword" class="form-control  w-1/2" placeholder="Password"
    onChange={(e)=>{setuserdata({...userdata,password:e.target.value})}}
    />
    {/* <button onClick={(e)=>viewpassword(e)}>toog</button> */}
    <input type="checkbox" onClick={(e)=>viewpassword(e)}/>Show Password

    </div>

   

    {/* <!-- Sign in button --> */}
    <button class="btn btn-info btn-block my-2" onClick={handlesubmit}>Sign Up</button>

   

    {/* <!-- Social login --> */}
    <p>or sign up with:</p>

    <ul class="list-unstyled custom-social">
							<li><a href="#"><span class="fa fa-brands fa-facebook-f"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-twitter"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-instagram"></span></a></li>
							<li><a href="#"><span class="fa fa-brands fa-linkedin"></span></a></li>
						</ul>

</form>

    </>
  );
}

export default Signup;