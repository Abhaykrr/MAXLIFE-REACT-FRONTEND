import { useState,useRef, useEffect } from "react";
import 'reactjs-popup/dist/index.css';
import Login from "./login";
import Signup from "./signup";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
function Navbar() {

  const navigate = useNavigate()

  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [username,setusername] = useState()
  const [roleName,setRoleName] = useState()

  const checkLoggedIn = ()=>{
    try {
      setusername( localStorage.getItem('username'))
      setRoleName(localStorage.getItem('roleName').split('_')[1])
    } catch (error) {
      console.log("Local Storage Data Not Found")
    }
   

    // alert(roleName)

    if(username == null || username == undefined || username === undefined){
        setIsLoggedIn(false)
    }else{
      setIsLoggedIn(true)
    }
  }

  const doLogout = ()=>{
    localStorage.clear()
    navigate("/")
    return
  }

  useEffect(()=>{
    checkLoggedIn()
  })


  const divertToPortfolio = ()=>{
    const roleId = localStorage.getItem('roleId')
    
    if(roleId === undefined || roleId === null)
      alert("Please Login")

        if(roleId === "1")
        navigate("/user/dashboard")

        if(roleId === "2")
        navigate("/admin/dashboard")

        if(roleId === "3")
        navigate("/employee/dashboard")

    

  }

  const [loginopen,setloginopen]=useState(false);
  const [signupopen,setsignupopen]=useState(false);
  const target = useRef(null);
  
    return (
      <>
      {/* <Helmet>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"/>
      </Helmet> */}
      <nav class="custom-navbar  navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

<div class="container">
  <a class="navbar-brand" href="index.html">Max Life<span>.</span></a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsFurni">
    <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
      <li class="nav-item ">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li><a class="nav-link" href="/#why_us">More</a></li>
      <li><a class="nav-link" href="/#team">Team</a></li>
      <li ><a class="nav-link" href="/policies">Explore policies</a></li>
      <li><a class="nav-link" href="/#testimonials">Testimonials</a></li>
      <li ><a class="nav-link"  href="" onClick={divertToPortfolio}> Portfolio</a></li>
      <li>


      <div>
      {isLoggedIn ? (
        
          <li style={{color:"white"}}>Welcome, {roleName} {username} &nbsp; &nbsp;<button type="button" class="btn btn-danger" onClick={doLogout}>Logout</button>
           
          </li>
          
      ) : (
        <div>
        <button class="btn"
        ref={target}
        onClick={()=>{
          setloginopen(!loginopen)
        }}
        data-bs-toggle="modal"
        data-bs-target="#openloginpopup"
        >Login</button> &nbsp;&nbsp;
  
      <button class="btn"
        onClick={()=>{setsignupopen(!signupopen)}}
        data-bs-toggle="modal"
        data-bs-target="#opensignupopup"
        >Sign up</button>
        </div>
      )}
    </div>

    
      
      
      


      <div
            class="modal fade"
            id="openloginpopup"
            tabindex="-1"
            aria-labelledby="openloginpopup"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
              <div class="modal-header text-center">
                 
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                   <Login/>
              </div>
              </div>
              </div>
  
        
        </li>
      <li>
        
     
      
      <div
            class="modal fade"
            id="opensignupopup"
            tabindex="-1"
            aria-labelledby="opensignupopup"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
              <div class="modal-header text-center">
                  
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                   <Signup/>
              </div>
              </div>
              </div>
      
      </li>
    </ul>

    {/* <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
      <li><a class="nav-link" href="#"><img src="images/user.svg"/></a></li>
      <li><a class="nav-link" href="cart.html"><img src="images/cart.svg"/></a></li>
    </ul> */}
  </div>
</div>
  
</nav>
      </>
    );
  }
  
  export default Navbar;
  