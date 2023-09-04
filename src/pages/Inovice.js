import React from 'react'
import "../components/CSS/inovice.css"

const Inovice = (props) => {

    console.log(props,"From invoice page")
    const Tax=((props.data.payment.tax)*(props.data.payment.amount))/100;
  return (
    <div class="container">
<div class="row">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-body">
                    <div class="invoice-title">
                        <h4 class="float-end font-size-15">Invoice #{props.data.referenceid} <span class="badge bg-success font-size-12 ms-2">{props.data.paymentstatus}</span></h4>
                        <br/>
                        <div class="mb-4">
                           <h2 class="mb-1 text-muted">Max_Life.com</h2>
                        </div>
                        <div class="text-muted">
                            <p class="mb-1">3184 Spruce Drive Madhya Pradesh, IN 46202</p>
                            <p class="mb-1"><i class="uil uil-envelope-alt me-1"></i> maxlife.com</p>
                            <p><i class="uil uil-phone me-1"></i> 012-345-6789</p>
                        </div>
                    </div>

                    <hr class="my-4"/>

                    <div>
                    <div class="container text-center" style={{height:'100%',width:"100%",display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div class="row row-cols-1 row-cols-lg-5 g-2 g-lg-3" style={{height:'100%',width:"100%",display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <div class="col col-md-8">
                                    <h5 class="font-size-15 mb-1">Payment id:</h5>
                                    <p>#{props.data.payment.paymentid}</p>
                                </div>
                                <div class="col-sm-6">
                                    <h5 class="font-size-15 mb-1">Payment Date:</h5>
                                    <p>{props.data.paiddate}</p>
                                </div>
                                <div class="col col-md-8">
                                    <h5 class="font-size-15 mb-1">Installment No:</h5>
                                    <p>#{props.data.installmentno}</p>
                                </div>
                                </div>
                            </div>
                        
                        
                    </div>
                    <hr/>
                    
                    <div class="py-2">
                        <h5 class="font-size-15">Order Summary</h5>

                        <div class="table-responsive">
                            <table class="table align-middle table-nowrap table-centered mb-0">
                                <thead>
                                    <tr>
                                        <th style={{width: "70px"}}>No.</th>
                                        <th>Item</th>
                                        <th>Date</th>
                                        <th>Payment Type</th>
                                        
                                        
                                        <th class="text-end" style={{width: "120px"}}>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">01</th>
                                        <td>
                                            <div>
                                                <h5 class="text-truncate font-size-14 mb-1">Policy</h5>
                                                <p class="text-muted mb-0">{props.data.installmentno} Installment Payment</p>
                                            </div>
                                        </td>
                                        <td>{props.data.paiddate}</td>
                                        <td>{props.data.payment.paymenttype}</td>
                                        <td class="text-end">{props.data.payment.amount}</td>
                                    </tr>
                                  
                                    
                                    {/* */}
                                    <tr>
                                        <th scope="row" colspan="4" class="border-0 text-end">
                                            Tax</th>
                                        <td class="border-0 text-end">{Tax} ({props.data.payment.tax}%)</td>
                                    </tr>
                                    {/* */}
                                   
                                    <tr>
                                        <th scope="row" colspan="4" class="border-0 text-end">Total</th>
                                        <td class="border-0 text-end"><h4 class="m-0 fw-semibold">{props.data.payment.amount+Tax}</h4></td>
                                    </tr>
                                    {/* */}
                                </tbody>
                            </table>
                        </div>
                        <div class="d-print-none mt-4">
                            <div class="float-end">
                                <a href="javascript:window.print()" class="btn btn-success me-1"><i class="fa fa-print"></i></a>
                                {/* <a href="#" class="btn btn-primary w-md">Send</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Inovice
