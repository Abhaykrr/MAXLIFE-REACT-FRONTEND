import React, { useEffect, useState } from 'react'
import Navbar from '../Shared Components/Navbar/Navbar'
import AccountAccord from '../Shared Components/accord/AccountAccord'
import axios from 'axios'
import Pagination from '../Shared Components/Page/Pagination'

const AgentCustomers = ({agId}) => {

const [pages,setPages] = useState()
const [currpage,setCurrpage] =useState(0)
const [pagesize,setPageSize] = useState(5);

const[status,setStatus] = useState('All')
const[policyprefix,setPolicyPrefix] = useState(0)




const [accountData,setAccountData] = useState({})

let agentId = localStorage.getItem('genericId')


const getAccounts = async()=>{

  try {
    if(agId!=null)
    agentId = agId
      console.log(currpage ,"See")
      // let response = await axios.get(`http://localhost:8080/maxlife/agentaccount/${agentId}/${currpage}/${pagesize}`)

      const response = await axios.get('http://localhost:8080/maxlife/agentaccount', {
        params: {
          agentid: agentId,
          policynoprefix:policyprefix,
          status:status,
          currpage: currpage,
          pagesize: pagesize
        }
      });

    // let response = await getCustomerAllAccountsUtil(customerId,currpage,pagesize)
    console.log(response.data.content,status)
    setAccountData({})
    setPages(response.data.totalPages-1)
    setAccountData(response.data.content)
    generateData()
    
  } catch (error) {
    alert(error.message)
  }
}

useEffect(()=>{
  getAccounts()
},[currpage,pagesize,status,policyprefix])

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
        <section className="home-section" id="userContent">
        <h4 style={{ display: 'flex', alignItems: 'center' }}>
  My Customers Accounts &nbsp;{status} {policyprefix}
  <div style={{ display: 'inline-block', width: '100px', height: '50px', borderRadius: '10px' }}>
    <select onChange={(e) => setPageSize(e.target.value)} className="form-control text-center" id="planStatus">
      <option value="5">5 Items</option>
      <option value="10">10 Items</option>
      <option value="15">15 Items</option>
    </select>
  </div>

  <div style={{ display: 'inline-block', width: '100px', height: '50px', borderRadius: '10px' }}>
    <select onChange={(e) => setStatus(e.target.value)} className="form-control text-center" id="planStatus">
      <option value="All">All</option>
      <option value="Active">Active</option>
      <option value="InActive">In Active</option>
    </select>
  </div>

  <div className="form-group" style={{ display: 'inline-block', width: '240px', height: '50px', border:'none',fontSize:'25px' }}>
    <input type="number" placeholder='Search by policyNo' onChange={(e) => { setPolicyPrefix(e.target.value || 0) }} style={{ width: '100%' }} />
  </div>
</h4>

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

export default AgentCustomers
