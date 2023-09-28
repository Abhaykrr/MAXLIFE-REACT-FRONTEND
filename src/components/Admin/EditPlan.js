import React, { useEffect, useState } from 'react'
import Navbar from '../Shared Components/Navbar/Navbar'
import axios from 'axios'
import swal from 'sweetalert'

const EditPlan = () => {

    const [planData,setPlanData] = useState({})

    const [planID,setPlanId] = useState()

    const [formPlanData,setFormPlanData] = useState({
        planName:"",planStatus:""
    })

    const getPlans = async()=>{
        try {
            let response = await axios.get('http://localhost:8080/maxlife/allplans')
            console.log(response.data)
            setPlanData(response.data)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(()=>{
        getPlans()
    },[])

   

    const changeFormData = (refPalnId)=>{
        for(let i = 0; i<planData.length; i++){
            if(planData[i].planid == refPalnId){
                formPlanData.planName = planData[i].planname
                formPlanData.planStatus = planData[i].status
                break
            }
        }
    }


    let planDropDownData
    if(planData.length>0){
        planDropDownData = planData.map((plan)=>{
          
            return(
                <option value={plan.planid}>{plan.planname} | Status : {plan.status}</option>
            )
        })
    }


    const updateDataBackend = async(e)=>{
        console.log(planID)
        console.log(formPlanData)

        try {
          e.preventDefault();
            let response = await axios.post(`http://localhost:8080/maxlife/updateplan/${planID}`,{
                planname:formPlanData.planName,
                status:formPlanData.planStatus
            })
            swal("Good job!", response.data, "success")
            getPlans()
            
        } catch (error) {
            alert(error.message)
        }
    }


  return (
    <div>
        <Navbar/>
        <section className="home-section" id="userContent" >
        <form class="needs-validation" novalidate
               onSubmit={(e)=>updateDataBackend(e)}
               >
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
                <div className="card-body">

                <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-2 text-primary">Select Plan Details</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="fullName">Select Plan <span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <select className="form-control" id="planStatus"
                        required
                        onChange={(e)=>{
                            setPlanId(e.target.value)
                            changeFormData(e.target.value)
                        }}>
                          <option  value="">Select Plan</option>
                             {planDropDownData}
                        </select>
                      </div>

                    </div>
                 
                   
                  </div><br />

                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-2 text-primary">Edit Plan Details</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="fullName">Plan Name<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="text"
                          required
                          className="form-control"
                          id="fullName"
                          placeholder="Enter Plan name"
                          value={formPlanData.planName}
                          onChange={(e)=>{
                            (/^[a-zA-Z0-9\s]+$/).test(e.target.value)? setFormPlanData({...formPlanData,planName:e.target.value}):swal("Invalid Input","Special Character not allowed","error")
                            
                            }}
                        />
                      </div>

                    </div>

                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div className="form-group">
                                <label for="fullName">Plan Status<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                                <select className="form-control" id="planStatus"
                                 value={formPlanData.planStatus}
                                 required
                          onChange={(e)=>{setFormPlanData({...formPlanData,planStatus:e.target.value})}}
                          >
                                    <option value="Active">Active</option>
                                    <option value="InActive">InActive</option>
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
                          // onClick={updateDataBackend}
                        >
                          Update Plan
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

export default EditPlan
