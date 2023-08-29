import React from 'react'
import "../CSS/accord.css"


const PaymentAccord = ({record}) => {

    let payData
    if(record.length>0){
        payData = record.map((e)=>{
            return (
                <tr>
                    <td>{e.installmentno}</td>
                    <td>{e.installmentamount}</td>
                    <td>{e.duedate}</td>
                   
                    <td>{e.paiddate ? (e.paiddate) : (
                            <button type="button" className="btn btn-danger">Pay</button>
                        )}
                    </td>
                    <td>{e.paymentstatus}</td>
                    <td><a href="">Download</a></td>
                     
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
