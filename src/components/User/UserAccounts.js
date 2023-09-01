import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import AccountAccord from '../accord/AccountAccord'
import { getCustomerAllAccountsUtil } from '../Util/CApis'
import Pagination from '../Page/Pagination'
import axios from 'axios'

const UserAccounts = ({custId}) => {

const [pages,setPages] = useState()
const [currpage,setCurrpage] =useState(0)
const pagesize = 4;

  
  const customerId = localStorage.getItem('genericId')
  if(customerId == null || customerId == undefined || customerId === null || customerId === undefined || customerId == '' || customerId === '')
  customerId = custId
  const [accountData,setAccountData] = useState({})

  const getAccounts = async()=>{

    try {
        console.log(currpage ,"See")
        let response = await axios.get(`http://localhost:8080/maxlife/account/${customerId}/${currpage}/${pagesize}`)

      // let response = await getCustomerAllAccountsUtil(customerId,currpage,pagesize)
      // console.log(response.data)
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
            <h4>My Accounts Page No : {currpage}</h4>
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
