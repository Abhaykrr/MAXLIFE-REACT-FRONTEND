import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Login = () => {
    const [userdata,setuserdata]=useState({email:"",password:""})
    const [passwordsec,setpasswordsec]=useState({type:"password",clas:""})
    const navigate = useNavigate()
    function viewpassword(e){
      // e.preventDefault();
      if(passwordsec.type=="password")setpasswordsec({...passwordsec,type:"text"})
      if(passwordsec.type=="text")setpasswordsec({...passwordsec,type:"password"})
      
    }
    async function handlesubmit (e){
        e.preventDefault()
        console.log(userdata.email);
        console.log(userdata.password);

        try {
          let response = await axios.post('http://localhost:8080/maxlife/api/auth/login',{
            username:userdata.email,
            password:userdata.password
          })
  
          localStorage.setItem('auth',response.data.accessToken)
          localStorage.setItem('roleId',response.data.roleId)
          localStorage.setItem('genericId',response.data.genericId)
          localStorage.setItem('username',response.data.username)
          localStorage.setItem('roleName',response.data.roleName)
          localStorage.setItem('age',response.data.age)
          console.log(response)

          swal("Good job!", "Login Successfull...!", "success")
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          
        } catch (error) {
          // alert(error.message)
          swal("OOPS!", "Login Failed...!", "warning")
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }

       
    }

  return (
    <>
    {/* <!-- Default form login --> */}
<form class="text-center border rounded-10 border-light p-5" action="#!">

    <p class="h4 mb-4">Sign in</p>

    {/* <!-- Email --> */}
    <input type="text" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Username"
    onChange={(e)=>{setuserdata({...userdata,email:e.target.value})}}
    />
    

    {/* <!-- Password --> */}
    <div>
    <input type={passwordsec.type} id="defaultLoginFormPassword" class="form-control  w-1/2" placeholder="Password"
    onChange={(e)=>{setuserdata({...userdata,password:e.target.value})}}
    />
    {/* <button onClick={(e)=>viewpassword(e)}>toog</button> */}
    <input type="checkbox" onClick={(e)=>viewpassword(e)}/>Show Password

    </div>
    
   

    {/* <!-- Sign in button --> */}
    <button class="btn btn-info btn-block my-4" onClick={handlesubmit}>Sign in</button>

   

    {/* <!-- Social login --> */}
    <p>or sign in with:</p>

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

export default Login