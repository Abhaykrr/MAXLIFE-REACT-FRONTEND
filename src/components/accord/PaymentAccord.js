import React from 'react'
import "../CSS/accord.css"
import Swal from 'sweetalert2';
import axios from 'axios';


const PaymentAccord = ({record,referesh}) => {


    const paymentModule = async (referenceId)=>{
      
    
        Swal.fire({
          title: 'Enter Payment Details',
          html:
            ` 
            <input type="text" id="card-number" placeholder="Card Number" required>
            <input type="text" id="expiry" placeholder="Expiry Date (MM/YY)" required>
            <input type="text" id="cvv" placeholder="CVV" required>`,
          showCancelButton: true,
          confirmButtonText: 'Submit',
          cancelButtonText: 'Cancel',
          focusConfirm: false,
          preConfirm: async () => {
            const cardNumber = document.getElementById('card-number').value;
            const expiry = document.getElementById('expiry').value;
            const cvv = document.getElementById('cvv').value;

             await updateRecordBackend(referenceId)
            
            
          }
        });
      }

      const updateRecordBackend = async (referenceId)=>{
            try {

                let response = await axios.post(`http://localhost:8080/maxlife/updaterecord/${referenceId}`)
                Swal.fire({
                    title: 'Payment Successful!',
                    text: 'Your payment has been processed.',
                    icon: 'success'
                });
                Swal.fire(
                    'Good job!',
                    response.data,
                    'success'
                  )
                  referesh()
            } catch (error) {
                alert(error.message)
            }
      }

    let payData
    if(record.length>0){
        payData = record.map((e)=>{
            return (
                <tr>
                    <td>{e.installmentno}</td>
                    <td>{e.installmentamount}</td>
                    <td>{e.duedate}</td>
                   
                    <td>{e.paiddate ? (e.paiddate) : (
                            <button disabled='' type="button" className="btn btn-danger"
                            onClick={()=>paymentModule(e.referenceid)}>Pay</button>
                        )}
                    </td>
                    <td>{e.paymentstatus}</td>
                    <td>{e.paiddate ? (<a href="">Download</a>) : (
                            <p/>
                        )}</td>
                     
                </tr>
            )
        })
    }

  return (
    <div className="accordion-tab"  >
    <input id={record[0].referenceid} type="checkbox" className="accordion-toggle" name="toggle" />
    <label for={record[0].referenceid} className='l-bg-blue-dark' style={{backgroundColor:'#11101D'}} >Payment Details</label>

        <div className="accordion-content">
        <table className="table  table-bordered  table-striped text-center">
                <thead>
                <tr style={{fontSize:'14px'}}>
                    <th scope="col">Installment No</th>
                    <th scope="col">Installment Amount</th>
                    <th scope="col">Due Date</th>
                    
                    <th scope="col">Paid Date</th>
                    <th scope="col">Payment Status</th>
                    <th scope="col">Receipt</th>
                    

                </tr>
                </thead>
                <tbody>
                    {payData}
                    </tbody>
        </table>

          

        </div>
    </div>
  )
}

export default PaymentAccord
