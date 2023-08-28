import React from 'react'
import "../CSS/accord.css"



const AccountAccord = () => {
  return (
    <div className="accordion-tab">
    <input id='ak' type="checkbox" className="accordion-toggle" name="toggle" />
    <label for='ak'>Account 1</label>

        <div className="accordion-content">
        <table className="table  table-bordered  table-striped text-center">
                <thead>
                <tr style={{fontSize:'14px'}}>
                    <th scope="col">Min Amount</th>
                    <th scope="col">Max Amount</th>
                    <th scope="col">Min Time</th>
                    <th scope="col">Max Time</th>
                    <th scope="col">Min Age</th>
                    <th scope="col">Max Age</th>
                    <th scope="col">Profit Ratio</th>
                    <th scope="col">Reg. Comm</th>
                    <th scope="col">Inst. Comm</th>

                </tr>
                </thead>
        </table>
        </div>
    </div>
  )
}

export default AccountAccord
