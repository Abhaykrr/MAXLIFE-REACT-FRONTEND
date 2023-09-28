import React, { useState } from "react";

function Card(props){
    const [openknow,setopenknow]=useState(false);
    const [carddetails,setcarddetails]=useState({cardnumber:0,fullname:"",cvv:"",expirymonth:0,expyear:0,amount:0});

    function handlesubmit(){
        console.log(carddetails);
    }
    return (
        <>
        <form class="text-center border rounded-10 border-light p-5" action="#!">

<div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="Enter Card Number "
  onChange={(e)=>{setcarddetails({...carddetails,cardnumber:e.target.value})}}
  />
  <label for="floatingInput">Card Number<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
</div>


<div class="form-floating mb-3">
  <input  class="form-control" id="floatingInput" placeholder="Enter Full Name "
  onChange={(e)=>{setcarddetails({...carddetails,fullname:e.target.value})}}
  />
  <label for="floatingInput">Cardholder Name<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
</div>
<div class="container">
  <div class="row">
    <div class="col-6">
    {/* <label for="floatingInput">Expiry Date<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label> */}
    <div class="container">
  <div class="row">
    <div class="col-6">
        
    <div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="MM "
  onChange={(e)=>{setcarddetails({...carddetails,expirymonth:e.target.value})}}
  />
  <label for="floatingInput">MM<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
</div>
</div>
<div class="col-6">
<div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="YY "
  onChange={(e)=>{setcarddetails({...carddetails,expyear:e.target.value})}}
  />
  <label for="floatingInput">YY<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
</div>
        
        </div>
        </div>
        </div>
    
    </div>
    <div class="col-6">
    <div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="Enter cvv Number "
  onChange={(e)=>{setcarddetails({...carddetails,cvv:e.target.value})}}
  />
  <label for="floatingInput">CVV<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
</div>
    </div>
  </div>
</div>
<div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="Amount "
  onChange={(e)=>{setcarddetails({...carddetails,amount:e.target.value})}}
  />
  <label for="floatingInput">Amount<span style={{ color: 'red', marginLeft: '4px' }}>*</span> </label>
</div>



{/* <!-- Sign in button --> */}
<button class="btn btn-info btn-block my-4" onClick={handlesubmit} >Proceed To Payment</button>




</form>

                        
  
  
        </>


    );

}

export default Card;