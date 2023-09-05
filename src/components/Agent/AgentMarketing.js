import React, { useState } from "react";
import Navbar from "../Shared Components/Navbar/Navbar";
import swal from "sweetalert";

function AgentMarketing(){
    const[email,setemail]=useState({to:"",subject:"",body:""})
    function handleSubmission(){
        if(email.to.length==0||email.subject.length==0||email.body.length==0){
            swal("Invalid Input Fields","Enter Valid input Fields","error");
            return;
        }
    }
    return(
        <div>
            <Navbar/>
            <section className="home-section" id="userContent">

            <div class="container bootdey">
<div class="email-app">
    
    <main>
        <h2 class="text-center">New Message</h2>
        <form>
            <div class="form-row mb-3">
                <label for="to" class="col-2 col-sm-1 col-form-label">To:</label>
                <div class="col-10 col-sm-11">
                    <input type="email" class="form-control" id="to"
                    value={email.to}
                    onChange={(e)=>setemail({...email,to:e.target.value})}
                    placeholder="Type email"/>
                </div>
            </div>
            <div class="form-row mb-3">
                <label for="cc" class="col-2 col-sm-1 col-form-label">Subject :</label>
                <div class="col-10 col-sm-11">
                    <input type="text" class="form-control"
                    value={email.subject}
                    onChange={(e)=>setemail({...email,subject:e.target.value})}
                    id="cc" placeholder="Type Subject"/>
                </div>
            </div>
            
        </form>
        <div class="row">
            <div class="col-sm-11 ml-auto">
                <br/>
                <div class="form-group mt-4">
                    <textarea class="form-control" id="message" 
                    value={email.body}
                    onChange={(e)=>setemail({...email,body:e.target.value})}
                    name="body" rows="12" placeholder="Click here to reply"></textarea>
                </div>
                <br/>
                <div class="form-group">
                    <button type="submit" class="btn btn-success m-20"
                    onClick={()=>handleSubmission()}
                    >Send</button>
                    
                </div>
            </div>
        </div>
    </main>
</div>
</div>


            </section>
        </div>
    )

}

export default AgentMarketing;