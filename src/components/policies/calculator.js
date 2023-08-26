import React, { useState } from "react";

function Calculator(){
    const [calculatordetails,setcalculatordetails]=useState({amount:0,duration:0,age:0,profitratio:0});
    function handlesubmit(){
        console.log(calculatordetails);
    }
    return(
        <>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Calculator</h5>
                <div class="grid row-3">

                <div class="col my-5">
                    <input type="nmber" class="form-control" placeholder="Amount"
                    onChange={(e)=>{setcalculatordetails({...calculatordetails,amount:e.target.value})}}
                    />

                </div>
                <div class="col my-5">
                    <input type="nmber" class="form-control" placeholder="Duration"
                    onChange={(e)=>{setcalculatordetails({...calculatordetails,duration:e.target.value})}}
                    />

                </div>
                <div class="col my-5">
                    <input type="nmber" class="form-control" placeholder="Age"
                    onChange={(e)=>{setcalculatordetails({...calculatordetails,age:e.target.value})}}
                    />

                </div>
                <div class="col my-5">
                    <input type="nmber" class="form-control" placeholder="Profit Ratio"
                    onChange={(e)=>{setcalculatordetails({...calculatordetails,profitratio:e.target.value})}}
                    />

                </div>
                
        

                </div>
                <div style={{height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <a onClick={handlesubmit} class="btn btn-primary">Calculate </a>
                </div>
                
             </div>
        </div>
        
        
        </>

    )
}

export default Calculator;