import React, { useState } from 'react'

const Signup = () => {
    const [userdata,setuserdata]=useState({email:"",password:"",firstname:"",lastname:""})
    function handlesubmit(){
        console.log(userdata);
    }
  return (
    <>
    {/* <!-- Default form login --> */}
<form class="text-center border rounded-10 border-light p-5" action="#!">

    <p class="h4 mb-4">Sign up</p>
    <input   class="form-control mb-4" placeholder="First Name"
    onChange={(e)=>{setuserdata({...userdata,firstname:e.target.value})}}
    required
    />
    <input   class="form-control mb-4" placeholder="Last Name"
    required
    onChange={(e)=>{setuserdata({...userdata,lastname:e.target.value})}}
    />
    {/* <!-- Email --> */}
    <input type="email"  class="form-control mb-4" placeholder="E-mail"
    required
    onChange={(e)=>{setuserdata({...userdata,email:e.target.value})}}
    />

    {/* <!-- Password --> */}
    <input type="password"  class="form-control mb-4" placeholder="Password"
    required
    onChange={(e)=>{setuserdata({...userdata,password:e.target.value})}}
    />

   

    {/* <!-- Sign in button --> */}
    <button class="btn btn-info btn-block my-4" onClick={handlesubmit}>Sign in</button>

   

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