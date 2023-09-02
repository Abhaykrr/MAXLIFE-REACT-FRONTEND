import React, { useState } from 'react'
import Navbar from '../Shared Components/Navbar/Navbar'
import axios from 'axios'
import swal from 'sweetalert'

const AddPlan = () => {

    const [planData,setPlanData] = useState({planName:"",planStatus:"Active"})

    const addPlanBackend = async(e)=>{
        console.log(planData.planName)
        console.log(planData.planStatus)

        try {
          e.preventDefault();
            let response = await axios.post('http://localhost:8080/maxlife/addplan',{
                planname:planData.planName,
                status:planData.planStatus
            })
            swal("Good job!", response.data, "success")
        } catch (error) {
            alert(error.message)
        }

       
    }

  return (
    <div>
        <Navbar/>
        <section className="home-section" id="userContent" >
        <div className="container">
          <div className="row gutters">
            {/* <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="account-settings">
                    <div className="user-profile">
                      <div className="user-avatar">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Maxwell Admin"
                        />
                      </div>
                      <h5 className="user-name">Abhay Kumar</h5>
                      <h6 className="user-email">
                        <a href="">abhay80413@gmail.com</a>
                      </h6>
                    </div>
                    <div className="about">
                      <h5>About</h5>
                      <p>
                        I'm Yuki. Full Stack Designer I enjoy creating
                        user-centric, delightful and human experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
              <form class="needs-validation" novalidate
               onSubmit={(e)=>addPlanBackend(e)}
               >
                <div className="card-body">
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-2 text-primary">Add Plan Details</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="fullName">Plan Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          required
                          placeholder="Enter Plan name"
                          value={planData.planName}
                          onChange={(e)=>{
                            
                            (/^[a-zA-Z0-9\s]+$/).test(e.target.value)? setPlanData({...planData,planName:e.target.value}):swal("Invalid Input","Special Character not allowed","error")
                                                       
                           }}

                        />
                      </div>

                    </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="fullName">Plan Status</label>
                                <select className="form-control" id="planStatus"
                                required
                                onChange={(e)=>{setPlanData({...planData,planStatus:e.target.value})}}>
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
                          // onClick={addPlanBackend}
                        >
                          Add Plan
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
  )
}

export default AddPlan
