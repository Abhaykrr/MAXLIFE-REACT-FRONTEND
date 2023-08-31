import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import swal from "sweetalert";
import { getallEmployes } from "../Util/CApis";

function EditEmploye(){
    const [employe,setEmploye]=useState({firstname:"",lastname:"",salary:0,status:"Active"});
    const [allemploye,setAllemployee]=useState([]);
    async function getemploye(){
        let response=await getallEmployes();
        setAllemployee(response.data);
        // console.log(response.data);
    }
    useEffect(()=>{
        getemploye();

    },[])

    let employedropdown
    if(allemploye.length>0){
        employedropdown = allemploye.map((employe,index)=>{
          
            return(
                <option value={index}>{employe.firstname} | Status : {employe.status} | id : {employe.employeeid}</option>
            )
        })
    }
    async function updatedata(){
        try {
            let response = await axios.post(`http://localhost:8080/maxlife/updateemploye/${employe.employeeid}`,employe)
            swal("Good job!", response.data, "success")
            getemploye()
            
        } catch (error) {
            alert(error.message)
        }
    }

return(

    <div>
    <Navbar/>
    <section className="home-section" id="userContent" >
    <div className="container">
      <div className="row gutters">
       
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h6 className="mb-2 text-primary">Edit Employee Details</h6>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label for="salary">Select Employe</label>
                            <select className="form-control" id="planStatus"
                        onChange={(e)=>{
                           setEmploye(allemploye[e.target.value]);
                           console.log(employe);
                        }}>
                          <option  value="">Select Plan</option>
                             {employedropdown}
                        </select>
                        </div>
                </div>
                <br/>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label for="firstname">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstname"
                      value={employe.firstname}
                      placeholder="Enter First name"
                      onChange={(e)=>{setEmploye({...employe,firstname:e.target.value})}}

                    />
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
                      value={employe.lastname}
                      onChange={(e)=>{setEmploye({...employe,lastname:e.target.value})}}

                    />
                        </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label for="salary">Employe Salary</label>
                            <input
                      type="text"
                      className="form-control"
                      id="salary"
                      value={employe.salary}
                      placeholder="Enter Employe Salary"
                      onChange={(e)=>{setEmploye({...employe,salary:e.target.value})}}

                    />
                        </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                        <div className="form-group">
                            <label for="fullName">Employe Status</label>
                            <select className="form-control" id="planStatus"
                            onChange={(e)=>{setEmploye({...employe,status:e.target.value})}}
                            value={employe.status}
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
                      type="button"
                      id="submit"
                      name="submit"
                      className="btn btn-primary"
                      onClick={updatedata}
                    >
                      Update Employee
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

export default EditEmploye;