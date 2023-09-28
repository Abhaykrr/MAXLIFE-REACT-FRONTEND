import React, { useEffect, useState } from "react";
import Navbar from "../Shared Components/Navbar/Navbar";
import axios from "axios";
import swal from "sweetalert";
import { getallAgents } from "../Util/CApis";

function EditAgents(){
    const [agent,setAgent]=useState({firstname:"",lastname:"",qualification:"",status:"Active"});
    const [allagents,setAllagents]=useState([]);
    async function getAgents(){
        let response=await getallAgents();
        setAllagents(response.data);
        // console.log(response.data);
    }
    useEffect(()=>{
        getAgents();

    },[])

    let agentsdropdown
    if(allagents?.length>0){
        agentsdropdown = allagents.map((agent,index)=>{
          
            return(
                <option value={index}>{agent.firstname} | Status : {agent.status} | id : {agent.agentid}</option>
            )
        })
    }
    async function updatedata(e){
        try {
          e.preventDefault();
            let response = await axios.post(`http://localhost:8080/maxlife/updateagent/${agent.agentid}`,agent)
            swal("Good job!", response.data, "success")
            getAgents()
            
        } catch (error) {
            alert(error.message)
        }
    }

return(

    <div>
    <Navbar/>
    <section className="home-section" id="userContent" >
    <form class="needs-validation" novalidate
               onSubmit={(e)=>updatedata(e)}
               >
    <div className="container">
      <div className="row gutters">
       
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Edit Agent Details</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label for="salary">Select Agent<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                            <select className="form-control" id="planStatus"
                            required
                        onChange={(e)=>{
                           setAgent(allagents[e.target.value]);
                           console.log(agent);
                        }}>
                          <option  value="">Select Plan</option>
                             {agentsdropdown}
                        </select>
                        </div>
                </div>
                <br/>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="firstname">First Name<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstname"
                          placeholder="Enter First name"
                          required
                          value={agent.firstname}
                          onChange={(e)=>{
                            ((/^[a-zA-Z0-9\s]+$/).test(e.target.value)||(e.target.value==""))?setAgent({...agent,firstname:e.target.value}):swal("Invalid Input","Special Character not allowed","error")
                              }}

                        />
                      </div>

                     </div>

                     <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="lastname">Last Name<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                                <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          placeholder="Enter last name"
                          required
                          value={agent.lastname}
                          onChange={(e)=>{
                            ((/^[a-zA-Z0-9\s]+$/).test(e.target.value)||(e.target.value==""))?setAgent({...agent,lastname:e.target.value}):swal("Invalid Input","Special Character not allowed","error")

                          }}

                        />
                            </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="qualification">Qualification<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                                <input
                          type="text"
                          className="form-control"
                          id="qualification"
                          value={agent.qualification}
                          placeholder="Enter Agent qualification"
                          required
                          onChange={(e)=>{setAgent({...agent,qualification:e.target.value})}}

                        />
                            </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="fullName">Agent Status<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                                <select className="form-control" id="planStatus"
                                value={agent.status}
                                required
                                onChange={(e)=>{setAgent({...agent,status:e.target.value})}}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">InActive</option>
                                </select>
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
                      // onClick={updatedata}
                    >
                      Update Agent
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>
    </section>
  
</div>
)

}

export default EditAgents;