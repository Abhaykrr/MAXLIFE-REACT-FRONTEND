import React, { useRef, useState } from 'react'
import Login from '../common/login';

const Rough = () => {
    const [loginopen,setloginopen]=useState(false);
    const [signupopen,setsignupopen]=useState(false);
    const target = useRef(null);
  return (
    <div>
      <h1>Rough Work</h1>
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
              <div class="modal-header text-center">
                  <h5 class="modal-title text-center" id="exampleModalLabel">
                    Login
                  </h5>
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
    </div>
  )
}

export default Rough
