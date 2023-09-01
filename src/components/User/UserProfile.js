import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import "../CSS/userprofile.css"
import axios from 'axios'
import swal from 'sweetalert'

const UserProfile = () => {

  const [customerData,setCustomerData] = useState({})
    
  const [customerFormData,setCustomerFormData] = useState({
    age:"",
    city:"",
    customerid:"",
    email:"",
    firstname:"",
    lastname:"",
    mobile:"",
    nominee:"",
    nomineerelation:"",
    state:"",
    street:"",
    zipcode:""
  })

  const updateCustomerBackend = async(e)=>{
    e.preventDefault();
    const customerId = localStorage.getItem('genericId')
    console.log(customerFormData)

    try {

      let response = await axios.post(`http://localhost:8080/maxlife/updatecustomer/${customerId}`,{
        age: customerFormData.age,
        city: customerFormData.city,
        email: customerFormData.email,
        firstname: customerFormData.firstname,
        lastname:customerFormData.lastname,
        mobile: customerFormData.mobile,
        nominee:customerFormData.nominee,
        nomineerelation: customerFormData.nomineerelation,
        state: customerFormData.state,
        street: customerFormData.street,
        zipcode:customerFormData.zipcode
      })

      swal("Good job!", response.data, "success")
      
    } catch (error) {
      alert(error.message)
    }
  }


  const getCustomerDetails = async()=>{

    const customerId = localStorage.getItem('genericId')
    try {
      
      let response = await axios.get(`http://localhost:8080/maxlife/getcustomer/${customerId}`)
      console.log(response.data)
      

      const newData = {
        age: response.data.age,
        city: response.data.city,
        email: response.data.email,
        firstname: response.data.firstname,
        lastname:response.data.lastname,
        mobile: response.data.mobile,
        nominee: response.data.nominee,
        nomineerelation: response.data.nomineerelation,
        state: response.data.state,
        street: response.data.street,
        zipcode:response.data.zipcode
      };
      setCustomerFormData(newData)  

    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(()=>{
    getCustomerDetails()
  },[])

  return (
    <div>
      <Navbar />
      <section className="home-section" id="userContent">
      <form class="needs-validation" novalidate
               onSubmit={(e)=>updateCustomerBackend(e)}
               >
        <div className="text">Settings</div>

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
                      <h5 className="user-name">{customerFormData.firstname} {customerFormData.lastname}</h5>
                      <h6 className="user-email">
                        <a href="">{customerFormData.email}</a>
                      </h6>
                    </div>
                    <div className="about">
                      <h5>Privacy & Policy </h5>
                      <p>
                      We may collect personal information that you provide voluntarily when you interact with our website. This may include your name, email address, and any other information you choose to provide.

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
                      <h6 className="mb-2 text-primary">Personal Details</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="fullName">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          required
                          placeholder="Enter First name"
                          value={customerFormData.firstname}
                          onChange={(e)=>{setCustomerFormData({...customerFormData,firstname:e.target.value})}}
                        />
                      </div>

                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="fullName">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          required
                          placeholder="Enter Last name"
                          value={customerFormData.lastname}
                          onChange={(e)=>{setCustomerFormData({...customerFormData,lastname:e.target.value})}}
                        />
                      </div>

                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="eMail">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="eMail"
                          required
                          placeholder="Enter Email ID"
                           value={customerFormData.email}
                          onChange={(e)=>{setCustomerFormData({...customerFormData,email:e.target.value})}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="phone">Phone</label>
                        <input
                          type="number"
                          className="form-control"
                          id="phone"
                          required
                          placeholder="Enter Phone number"
                          value={customerFormData.mobile}
                          onChange={(e)=>{setCustomerFormData({...customerFormData,mobile:e.target.value})}}
                        />
                      </div>
                    </div>
                   
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mt-3 mb-2 text-primary">Address</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="Street">Street</label>
                        <input
                          type="name"
                          className="form-control"
                          id="Street"
                          required
                          placeholder="Enter Street"
                          value={customerFormData.street}
                          onChange={(e)=>{setCustomerFormData({...customerFormData,street:e.target.value})}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="ciTy">City</label>
                        <input
                          type="name"
                          className="form-control"
                          id="ciTy"
                          required
                          placeholder="Enter City"
                          value={customerFormData.city}
                          onChange={(e)=>{setCustomerFormData({...customerFormData,city:e.target.value})}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="sTate">State</label>
                        <input
                          type="text"
                          className="form-control"
                          id="sTate"
                          required
                          placeholder="Enter State"
                          value={customerFormData.state}
                          onChange={(e)=>{setCustomerFormData({...customerFormData,state:e.target.value})}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="zIp">Zip Code</label>
                        <input
                          type="text"
                          className="form-control"
                          id="zIp"
                          required
                          placeholder="Zip Code"
                          value={customerFormData.zipcode}
                          onChange={(e)=>{setCustomerFormData({...customerFormData,zipcode:e.target.value})}}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mt-3 mb-2 text-primary">Nominee </h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="Street">Name</label>
                        <input
                          type="name"
                          className="form-control"
                          id="Street"
                          required
                          placeholder="Enter Name"
                          value={customerFormData.nominee}
                          onChange={(e)=>{setCustomerFormData({...customerFormData,nominee:e.target.value})}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="ciTy">Relation</label>
                        <input
                          type="name"
                          className="form-control"
                          id="ciTy"
                          required
                          placeholder="Enter Relation"
                          value={customerFormData.nomineerelation}
                          onChange={(e)=>{setCustomerFormData({...customerFormData,nomineerelation:e.target.value})}}
                        />
                      </div>
                    </div>
                  
                  
                  </div><br />

                  <div className="row gutters text-center ">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="text-right">
                       
                        <button
                          type="submit"
                          id="submit"
                          name="submit"
                          className="btn btn-primary"
                          // onClick={updateCustomerBackend}
                        >
                          Update
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
  );
}

export default UserProfile
