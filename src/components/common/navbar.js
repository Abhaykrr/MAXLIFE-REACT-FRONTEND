import { useState,useRef } from "react";
import 'reactjs-popup/dist/index.css';
import Login from "./login";
import Signup from "./signup";
function Navbar() {
  const [loginopen,setloginopen]=useState(false);
  const [signupopen,setsignupopen]=useState(false);
  const target = useRef(null);
  
    return (
      <>
      <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

<div class="container">
  <a class="navbar-brand" href="index.html">Max Life<span>.</span></a>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarsFurni">
    <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
      <li class="nav-item  active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li><a class="nav-link" href="#why_us">More</a></li>
      <li><a class="nav-link" href="#team">Team</a></li>
      <li ><a class="nav-link" href="#policies">Explore policies</a></li>
      <li><a class="nav-link" href="#testimonials">Testimonials</a></li>
      <li>
      
      <button class="btn"
      ref={target}
      onClick={()=>{
        setloginopen(!loginopen)
      }}
      data-bs-toggle="modal"
      data-bs-target="#openloginpopup"
      >Login</button>
      


      <div
            class="modal fade"
            id="openloginpopup"
            tabindex="-1"
            aria-labelledby="openloginpopup"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
              <button
                    type="button"
                    class="btn-close text-left"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                   <Login/>
              </div>
              </div>
              </div>
  
        
        </li>
      <li><button class="btn"
      onClick={()=>{setsignupopen(!signupopen)}}
      data-bs-toggle="modal"
      data-bs-target="#opensignupopup"
      >Sign up</button>
      
      <div
            class="modal fade"
            id="opensignupopup"
            tabindex="-1"
            aria-labelledby="opensignupopup"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
              <button
                    type="button"
                    class="btn-close text-left"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
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
  