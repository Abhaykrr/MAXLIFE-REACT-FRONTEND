import React, { useEffect, useState } from 'react'
import Navbar from '../Shared Components/Navbar/Navbar'
import AccountAccord from '../Shared Components/accord/AccountAccord'
import { getCustomerAllAccountsUtil } from '../Util/CApis' 
import Pagination from '../Shared Components/Page/Pagination'
import axios from 'axios'

const UserAccounts = ({custId}) => {

const [pages,setPages] = useState()
const [currpage,setCurrpage] =useState(0)
const pagesize = 4;

  
  let customerId = localStorage.getItem('genericId')
 

  console.log(customerId,"UserAccounts")
  const [accountData,setAccountData] = useState({})

  const getAccounts = async()=>{

    try {
        if(custId !=null)
        customerId = custId
        let response = await axios.get(`http://localhost:8080/maxlife/account/${customerId}/${currpage}/${pagesize}`)

      // let response = await getCustomerAllAccountsUtil(customerId,currpage,pagesize)
      console.log(response.data)
      setPages(response.data.totalPages-1)
      setAccountData(response.data.content)
      generateData()
      
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(()=>{
    getAccounts()
  },[currpage])

  useEffect(()=>{
    generateData()
  },[accountData])


  const [personalAccord,setPersonalAccord] = useState([])

  const generateData = ()=>{
    console.log("generating...")
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
                <div style={{display:'flex',justifyContent:'center'}}>
                  <h1><Pagination pages={pages} currpage={currpage} setCurrpage={setCurrpage}/></h1>
                </div>
                
            </div>
        </section>
      
    </div>
  )
}

export default UserAccounts
