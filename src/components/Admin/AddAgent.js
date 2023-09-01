import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

import axios from "axios";
import swal from "sweetalert";

function AddAgent(){
    const [agent,setAgent]=useState({firstname:"",lastname:"",qualification:"",status:"Active"});
    const [userdata,setuserdata]=useState({username:"",password:""});
    async function addAgentBackend(e){
        
        try {
          e.preventDefault();
            
          
            let response =await axios.post('http://localhost:8080/maxlife/api/auth/register',{
              username:userdata.username,
              password:userdata.password,
  
              role:"ROLE_AGENT",
              agent
  
            })
            swal("Good job!", response.data, "success");
            
        } catch (error) {
            alert(error.message)
        }

        
    }
    return (

        <div>
        <Navbar/>
        <section className="home-section" id="userContent" style={{width:'100%',display:'flex',justifyContent:'center'}} >
         
        <div className="container">
          <div className="row gutters">
           
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
               <form class="needs-validation" novalidate
               onSubmit={(e)=>addAgentBackend(e)}
               >
                
               <div className="card-body">
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-2 text-primary">Add Agent Details</h6>
                    </div>
                 
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="firstname">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          placeholder="Enter First name"
                          required
                          onChange={(e)=>{setAgent({...agent,firstname:e.target.value})}}

                        />
                        <div class="valid-feedback">
      Looks good!
    </div>
                      </div>

                     </div>

                     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="lastname">Last Name</label>
                                <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          placeholder="Enter last name"
                          required
                          onChange={(e)=>{setAgent({...agent,lastname:e.target.value})}}

                        />
                            </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="qualification">Qualification</label>
                                <input
                          type="text"
                          className="form-control"
                          id="qualification"
                          placeholder="Enter Agent qualification"
                          required
                          onChange={(e)=>{setAgent({...agent,qualification:e.target.value})}}

                        />
                            </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="fullName">Agent Status</label>
                                <select className="form-control" id="planStatus"
                                required
                                onChange={(e)=>{setAgent({...agent,status:e.target.value})}}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">InActive</option>
                                </select>
                            </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="username">Username</label>
                                <input
                          type="text"
                          className="form-control"
                          id="username"
                          required
                          placeholder="Enter Agent Username"
                          onChange={(e)=>{setuserdata({...userdata,username:e.target.value})}}

                        />
                            </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="password">Password</label>
                                <input
                          type="text"
                          className="form-control"
                          id="password"
                          required
                          placeholder="Enter Agent Password"
                          onChange={(e)=>{setuserdata({...userdata,password:e.target.value})}}

                        />
                            </div>
                    </div>

                 
                   
                  </div>
                  
                
                    <br />
                  <div className="row gutters text-center">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="text-right">
                       
                        <button
                          type="submit"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
                          // onClick={addAgentBackend}
                        >
                          Add Agent
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>
                
                
                
                </form> 
                 
               
              </div>
            </div>
          </div>
        </div>
        </section>
      
    </div>
    );
}

export default AddAgent;