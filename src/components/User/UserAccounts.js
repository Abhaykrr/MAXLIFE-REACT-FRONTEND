import React from 'react'
import Navbar from '../Navbar/Navbar'
import AccountAccord from '../accord/AccountAccord'

const UserAccounts = () => {
  return (
    <div>
        <Navbar/>
      <section className="home-section" id="userContent" >
            <h4>My Accounts</h4>
            <div className="card h-100" style={{ width: '100%', height: '100%' }}>
                <div className="card-body">
                   <AccountAccord/>
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default UserAccounts
