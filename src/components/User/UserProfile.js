import React, { useEffect, useState } from 'react'
import Navbar from "../Shared Components/Navbar/Navbar";
import "../CSS/userprofile.css"
import axios from 'axios'
import swal from 'sweetalert'

const UserProfile = () => {

  const [bgv,setBgv] = useState("Pending")

  const getCustomerDocx = async()=>{

    const customerId = localStorage.getItem('genericId')
    try {

      const response = await axios.get('http://localhost:8080/maxlife/getdocx',{
        params: {
         customerid:customerId
        }
      });
      console.log(response.data)
      
      setBgv(response.data.status)
      
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(()=>{
    getCustomerDocx()
  },[])

  
  const [selectedImage, setSelectedImage] = useState(null); // State to store the selected image
  const [formData, setFormData] = useState(new FormData()); // State to store FormData
  const customerId = localStorage.getItem('genericId')
  
  // Function to handle image selection
  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setSelectedImage(URL.createObjectURL(selectedFile));

      // Create a new FormData object and append the selected file to it
      const newFormData = new FormData();
      newFormData.append('image', selectedFile);

      // Set the new FormData object in the state
      setFormData(newFormData);
    }
  };


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

      if(formData!=new FormData()) //changed 
      try {
        const response = await axios.post(`http://localhost:8080/maxlife/addimage/401/${customerId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data', // Required for file upload
          },
        });
  
        console.log('Image upload response:', response.data);
      } catch (error) {
        console.error('Error uploading image:', error);
      }

      setFormData(new FormData());
      
    } catch (error) {
      alert(error.message)
    }

    // window.location.reload()
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
                      <img style={{
                    width: '500px',
                    height: '250px',
                    borderRadius: '10px',
                    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' // Change the values as needed
                  }} src={`http://localhost:8080/maxlife/image/401/${customerId}`} alt="Your Photo Id Is Pending Please Upload" class="img-fluid" />
                   Document Verification : {bgv?bgv:"Upload Pending"}
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
                        <label for="fullName">First Name<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          required
                          placeholder="Enter First name"

                          value={customerFormData.firstname}
                          onChange={(e)=>{
                            (/^[a-zA-Z0-9\s]+$/).test(e.target.value)?setCustomerFormData({...customerFormData,firstname:e.target.value}):swal("Invalid Input","Special Character not allowed","error")
                            }}
                        />
                      </div>

                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="fullName">Last Name <span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          required
                          placeholder="Enter Last name"
                          value={customerFormData.lastname}
                          onChange={(e)=>{(/^[a-zA-Z0-9\s]+$/).test(e.target.value)?setCustomerFormData({...customerFormData,lastname:e.target.value}):swal("Invalid Input","Special Character not allowed","error")}}
                        />
                      </div>

                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="eMail">Email<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
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
                        <label for="phone">Phone<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
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
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="phone">Age<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="number"
                          className="form-control"
                          id="phone"
                          required
                          placeholder="Enter Age"
                          value={customerFormData.age}
                          onChange={(e)=>{setCustomerFormData({...customerFormData,age:e.target.value})}}
                        />
                      </div>
                    </div>
                   
                  </div>
                            <br />
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-2 text-primary">Documents</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="fullName">Photo Id<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <div class="mb-3">
                          <input class="form-control" type="file" id="formFile" onChange={handleImageChange}/>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mt-3 mb-2 text-primary">Address</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="Street">Street<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="name"
                          className="form-control"
                          id="Street"
                          required
                          placeholder="Enter Street"
                          value={customerFormData.street}
                          onChange={(e)=>{(/^[a-zA-Z0-9\s]+$/).test(e.target.value)?setCustomerFormData({...customerFormData,street:e.target.value}):swal("Invalid Input","Special Character not allowed","error")}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="ciTy">City<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="name"
                          className="form-control"
                          id="ciTy"
                          required
                          placeholder="Enter City"
                          value={customerFormData.city}
                          onChange={(e)=>{(/^[a-zA-Z0-9\s]+$/).test(e.target.value)?setCustomerFormData({...customerFormData,city:e.target.value}):swal("Invalid Input","Special Character not allowed","error")}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="sTate">State<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="text"
                          className="form-control"
                          id="sTate"
                          required
                          placeholder="Enter State"
                          value={customerFormData.state}
                          onChange={(e)=>{(/^[a-zA-Z0-9\s]+$/).test(e.target.value)?setCustomerFormData({...customerFormData,state:e.target.value}):swal("Invalid Input","Special Character not allowed","error")}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="zIp">Zip Code<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="number"
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
                        <label for="Street">Name<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="name"
                          className="form-control"
                          id="Street"
                          required
                          placeholder="Enter Name"
                          value={customerFormData.nominee}
                          onChange={(e)=>{(/^[a-zA-Z0-9\s]+$/).test(e.target.value)?setCustomerFormData({...customerFormData,nominee:e.target.value}):swal("Invalid Input","Special Character not allowed","error")}}
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label for="ciTy">Relation<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
                        <input
                          type="name"
                          className="form-control"
                          id="ciTy"
                          required
                          placeholder="Enter Relation"
                          value={customerFormData.nomineerelation}
                          onChange={(e)=>{(/^[a-zA-Z0-9\s]+$/).test(e.target.value)?setCustomerFormData({...customerFormData,nomineerelation:e.target.value}):swal("Invalid Input","Special Character not allowed","error")}}
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
