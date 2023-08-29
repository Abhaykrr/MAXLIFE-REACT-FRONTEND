import React, { useEffect, useState } from 'react'
import "../CSS/accord.css"
import { getCustomerAllAccountsUtil } from '../Util/CApis'
import PaymentAccord from './PaymentAccord'

const AccountAccord = ({policy}) => {


  return (
    <div className="accordion-tab"  >
    <input id={policy.policyno} type="checkbox" className="accordion-toggle" name="toggle" />
    <label for={policy.policyno} className='l-bg-blue-dark' style={{backgroundColor:'#11101D'}} >Policy Account No : #{policy.policyno} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Status:{policy.status}</label>

        <div className="accordion-content">
        <table className="table  table-bordered  table-striped text-center">
                <thead>
                <tr style={{fontSize:'14px'}}>
                    <th scope="col">Account No</th>
                    <th scope="col">Plan</th>
                    <th scope="col">Scheme</th>
                    <th scope="col">Issued Date</th>
                    <th scope="col">Maturity Date</th>
                    <th scope="col">Premeium Type</th>
                    <th scope="col">Total Amount</th>
                    <th scope="col">Profit Ratio</th>
                    <th scope="col">Assured Amount</th>
                    <th scope="col">Agent</th>

                </tr>
                </thead>
                <tbody>
                    
                    <tr>
                     
                        <td>{policy.policyno}</td>
                        <td>{policy.insurancescheme.insuranceplan.planname}</td>
                        <td>{policy.insurancescheme.schemename}</td>
                        <td>{policy.issuedate}</td>
                        <td>{policy.maturitydate}</td>
                        <td>{policy.premeiumtype} Months</td>
                        <td>Rs {policy.amount}</td>
                        <td>{policy.insurancescheme.profitratio} %</td>
                        <td>Rs {policy.amount+policy.interestamount}</td>
                        <td>{policy.agent}</td>
                       
                        </tr>
                    </tbody>
        </table>

          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
               <PaymentAccord record ={policy.policyrecords}/>
          </div>

        </div>
    </div>
  )
}

export default AccountAccord
