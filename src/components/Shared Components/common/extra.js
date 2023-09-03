import Card from "../policies/card";
import 'reactjs-popup/dist/index.css';
import Login from "./login";
function Paycard(){
return (<>

hello
<button class="btn"
        data-bs-toggle="modal"
        data-bs-target="#openpaymentopoup"
        >Pay</button>
       
<div
            class="modal fade w-100"
            id="openpaymentopoup"
            tabindex="-1"
            aria-labelledby="openpaymentopoup"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content ">
              <div class="modal-header text-center">
                  <h5 class="modal-title text-center" id="exampleModalLabel">
                    Payment Details
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                   <Card/>
              </div>
              </div>
              </div>






</>);


}



export default Paycard;