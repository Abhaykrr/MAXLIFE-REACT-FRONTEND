import React, { useState } from "react";
import swal from "sweetalert";
import Swal from "sweetalert2";

function Paymentcard(){
    const [carddetails,setcarddetails]=useState({accountno:"",expiry:"",cvv:""});
    function handlesubmission(e){
        e.preventDefault();
        console.log(e,"from form submit");
    }
    return (
        <div>
            <form id="myForm"  onSubmit={(e)=>handlesubmission(e)}>

        {/* <label>Enter Card Number</label>
        <br/>
        <input 
        required
        id="card-number"
        onChange={(e)=>{setcarddetails({...carddetails,accountno:e.target.value})}}
        value={carddetails.accountno}
        placeholder="Should be 12 digit "
        />
        <br/>
        <label>Enter Expiry Date</label>
        <br/>
        <input 
        required
        id="expiry"
        onChange={(e)=>{setcarddetails({...carddetails,expiry:e.target.value})}}
        value={carddetails.expiry}
        placeholder="MM-YY"
        />
        <br/>
        <label>Enter Card CVV</label>
        <br/>
        <input 
        required
        id="cvv"
        placeholder="3 digit pin"
        onChange={(e)=>{setcarddetails({...carddetails,cvv:e.target.value})}}
        value={carddetails.cvv}

        /> */}
        <div class="row" style={{width:"80%",marginLeft:'3rem'}}>
            <div>
                <label>Card Number</label>
                <input type="text" class="form-control" id="card-number" placeholder="Enter 12 digit card number"/>
            </div>
            <br/>
            <br/>
            <br/>

    <div class="col">
    <label>Expiry Date</label>
      <input type="text"  id="expiry" class="form-control" placeholder="MM-YY"/>
    </div>
    <div class="col">
    <label>Enter Cvv no.</label>
      <input type="text" id="cvv" class="form-control" placeholder="Cvv"/>
    </div>
  </div>
        {/* <button type="button" onClick={()=>handleSubmission()}>Proceed To Pay</button> */}
        </form>

        </div>

    )
}

export default Paymentcard;