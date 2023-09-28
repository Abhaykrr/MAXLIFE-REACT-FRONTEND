import React, { useEffect, useState } from 'react'
import Navbar from '../Shared Components/Navbar/Navbar'
import axios from 'axios'
import swal from 'sweetalert'

const AddScheme = () => {

    const [planData,setPlanData] = useState({})

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

    let planDropDownData
    if(planData.length>0){
        planDropDownData = planData.map((plan)=>{
            if(plan.status!="InActive")
            return(
                <option value={plan.planid}>{plan.planname}</option>
            )
        })
    }
    const regex = /^[a-zA-Z0-9\s]+$/;
    const [schemeFormData,setSchemeFormData] = useState({
        planid:"",
        schemename:"",
        schemeimageurl:"",
        description:"",
        minamount:"250000",
        maxamount:"500000",
        mininvestmenttime:"3",
        maxinvestmenttime:"5",
        minage:"29",
        maxage:"45",
        profitratio:"2",
        registrationcommision:"10",
        installmentcommision:"5",
        status:"Active"
    })

    const addSchemeBackend = async (e)=>{

      console.log(schemeFormData)

      try {
        e.preventDefault();
        let response = await axios.post(`http://localhost:8080/maxlife/addscheme/${schemeFormData.planid}`,{
        // planid : schemeFormData.planid,
        schemename : schemeFormData.schemename,
        schemeimageurl :schemeFormData.schemeimageurl,
        description : schemeFormData.description,
        minamount : schemeFormData.minamount,
        maxamount : schemeFormData.maxamount,
        mininvestmenttime : schemeFormData.mininvestmenttime,
        maxinvestmenttime : schemeFormData.maxinvestmenttime,
        minage :schemeFormData.minage,
        maxage : schemeFormData.maxage,
        profitratio :schemeFormData.profitratio,
        registrationcommision :schemeFormData.registrationcommision,
        installmentcommision :schemeFormData.installmentcommision,
        status :schemeFormData.status
        })

        swal("Good job!", response.data, "success")
      } catch (error) {
        alert(error.message)
      }

    }


  return (
    <div>
        <Navbar/>

        <section className="home-section" id="userContent">
        <form class="needs-validation" novalidate
               onSubmit={(e)=>addSchemeBackend(e)}
               >

        <div className="container">
          <div className="row gutters">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
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
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">

                <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mt-3 mb-2 text-primary"> Plan </h6>
                    </div>
                   
                   
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="phone">Choose Plan<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <select className="form-control" id="planStatus"
                        required
                        onChange={(e)=>{setSchemeFormData({...schemeFormData,planid:e.target.value})}}>
                                   {planDropDownData}
                                </select>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="ciTy">Profit Ratio<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="number"
                          className="form-control"
                          id="ciTy"
                          value={schemeFormData.profitratio}
                          placeholder="Enter Profit"
                          min={0}
                          required
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,profitratio:e.target.value})}}
                        />
                      </div>
                    </div>
                  
                  </div><br />

                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-2 text-primary">Scheme Details</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="fullName">Scheme Name<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          placeholder="Enter Scheme Name"
                          required
                          value={schemeFormData.schemename}
                          onChange={(e)=>{
                          ((/^[a-zA-Z0-9\s]+$/).test(e.target.value)||(e.target.value==""))?setSchemeFormData({...schemeFormData,schemename:e.target.value}):swal("Invalid Input","Special Character not allowed","error")
                        }}
                        />
                      </div>

                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="fullName">Image Url<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          placeholder="Enter Url"
                        
                          value={schemeFormData.schemeimageurl}
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,schemeimageurl:e.target.value})}}
                        />
                      </div>

                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="eMail">Description<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <textarea
                          type="text"
                          required
                          className="form-control"
                          id="eMail"
                          rows={3}
                          placeholder="Enter Description"
                          value={schemeFormData.description}
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,description:e.target.value})}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="phone">Status<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <select className="form-control" id="planStatus" 
                        required
                         onChange={(e)=>{setSchemeFormData({...schemeFormData,status:e.target.value})}}>
                                    <option value="Active">Active</option>
                                    <option value="InActive">InActive</option>
                                </select>
                      </div>
                    </div>
                   
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mt-3 mb-2 text-primary">Scheme Plan</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="Street">Min Amount<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="number"
                          className="form-control"
                          id="Street"
                          min={0}
                          required
                          value={schemeFormData.minamount}
                          placeholder="Enter Amount"
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,minamount:e.target.value})}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="ciTy">Max Amount<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="number"
                          className="form-control"
                          id="ciTy"
                          min={0}
                          required
                          value={schemeFormData.maxamount}
                          placeholder="Enter Amount"
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,maxamount:e.target.value})}}
                        
                        />
                         
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="sTate">Min Invest Time<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="number"
                          className="form-control"
                          id="sTate"
                          required
                          min={0}
                          placeholder="Enter Year"
                          value={schemeFormData.mininvestmenttime}
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,mininvestmenttime:e.target.value})}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="zIp">Max Invest Time<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="number"
                          className="form-control"
                          id="zIp"
                          required
                          min={0}
                          placeholder="Enter Year"
                          value={schemeFormData.maxinvestmenttime}
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,maxinvestmenttime:e.target.value})}}
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="zIp">Min Age<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="number"
                          className="form-control"
                          required
                          id="zIp"
                          min={0}
                          placeholder="Enter Age"
                          value={schemeFormData.minage}
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,minage:e.target.value})}}
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="zIp">Max Age<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="number"
                          className="form-control"
                          id="zIp"
                          placeholder="Enter Age"
                          required
                          min={0}
                          value={schemeFormData.maxage}
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,maxage:e.target.value})}}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mt-3 mb-2 text-primary">Agent Commision </h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="Street">Registration Commision<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="number"
                          className="form-control"
                          id="Street"
                          required
                          min={0}
                          placeholder="Enter Commision"
                          value={schemeFormData.registrationcommision}
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,registrationcommision:e.target.value})}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="ciTy">Installment Commision<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="number"
                          className="form-control"
                          id="ciTy"
                          min={0}
                          required
                          placeholder="Enter Commision"
                          value={schemeFormData.installmentcommision}
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,installmentcommision:e.target.value})}}
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
                          // onClick={addSchemeBackend}
                        >
                          Add Scheme
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

export default AddScheme
