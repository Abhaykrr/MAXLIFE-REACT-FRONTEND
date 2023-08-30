import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import AccountAccord from '../accord/AccountAccord'
import { getCustomerAllAccountsUtil } from '../Util/CApis'

const UserAccounts = () => {

  
  const customerId = localStorage.getItem('genericId')
  const [accountData,setAccountData] = useState({})

  const getAccounts = async()=>{

    try {

      let response = await getCustomerAllAccountsUtil(customerId)
      console.log(response.data)
      setAccountData(response.data)
      generateData()
      
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(()=>{
    getAccounts()
   
  },[])

  useEffect(()=>{
    generateData()
  },[accountData])


  const [personalAccord,setPersonalAccord] = useState([])

  const generateData = ()=>{
    let personalAccount = []
    if(accountData.length>0){
  
      for(let i = 0 ; i <accountData.length ;i++){
        personalAccount.push(<AccountAccord policy={accountData[i]} referesh = {getAccounts}/>)
      }
  
      console.log(personalAccount)
      setPersonalAccord(personalAccount)
    }
  }
 


  return (
    <div>
        <Navbar/>
      <section className="home-section" id="userContent" >
            <h4>My Accounts</h4>
            <div className="card" style={{ width: '100%' }}>
                <div className="card-body">
                   {/* <AccountAccord/> */}
                   {personalAccord}
                </div>
            </div>
        </section>
      
    </div>
  )
}

export default UserAccounts
