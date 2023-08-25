import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
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

    const addSchemeBackend = async ()=>{

      console.log(schemeFormData)

      try {
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
                        <label for="phone">Choose Plan</label>
                        <select className="form-control" id="planStatus"
                        onChange={(e)=>{setSchemeFormData({...schemeFormData,planid:e.target.value})}}>
                                   {planDropDownData}
                                </select>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="ciTy">Profit Ratio</label>
                        <input
                          type="name"
                          className="form-control"
                          id="ciTy"
                          value={schemeFormData.profitratio}
                          placeholder="Enter Profit"
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
                        <label for="fullName">Scheme Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          placeholder="Enter Scheme Name"
                          value={schemeFormData.schemename}
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,schemename:e.target.value})}}
                        />
                      </div>

                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="fullName">Image Url</label>
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
                        <label for="eMail">Description</label>
                        <input
                          type="email"
                          className="form-control"
                          id="eMail"
                          placeholder="Enter Description"
                          value={schemeFormData.description}
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,description:e.target.value})}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="phone">Status</label>
                        <select className="form-control" id="planStatus" 
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
                        <label for="Street">Min Amount</label>
                        <input
                          type="name"
                          className="form-control"
                          id="Street"
                          value={schemeFormData.minamount}
                          placeholder="Enter Amount"
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,minamount:e.target.value})}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="ciTy">Max Amount</label>
                        <input
                          type="name"
                          className="form-control"
                          id="ciTy"
                          value={schemeFormData.maxamount}
                          placeholder="Enter Amount"
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,maxamount:e.target.value})}}
                        
                        />
                         
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="sTate">Min Invest Time</label>
                        <input
                          type="text"
                          className="form-control"
                          id="sTate"
                          placeholder="Enter Year"
                          value={schemeFormData.mininvestmenttime}
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,mininvestmenttime:e.target.value})}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="zIp">Max Invest Time</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zIp"
                          placeholder="Enter Year"
                          value={schemeFormData.maxinvestmenttime}
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,maxinvestmenttime:e.target.value})}}
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="zIp">Min Age</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zIp"
                          placeholder="Enter Age"
                          value={schemeFormData.minage}
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,minage:e.target.value})}}
                        />
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="zIp">Max Age</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zIp"
                          placeholder="Enter Age"
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
                        <label for="Street">Registration Commision</label>
                        <input
                          type="name"
                          className="form-control"
                          id="Street"
                          placeholder="Enter Commision"
                          value={schemeFormData.registrationcommision}
                          onChange={(e)=>{setSchemeFormData({...schemeFormData,registrationcommision:e.target.value})}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="ciTy">Installment Commision</label>
                        <input
                          type="name"
                          className="form-control"
                          id="ciTy"
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
                          type="button"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
                          onClick={addSchemeBackend}
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
        </section>
      
    </div>
  )
}

export default AddScheme
