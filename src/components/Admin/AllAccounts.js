import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AccountAccord from '../Shared Components/accord/AccountAccord';
import Navbar from '../Shared Components/Navbar/Navbar';
import Pagination from '../Shared Components/Page/Pagination';

const AllAccounts = ({custId}) => {
 
const [pages,setPages] = useState()
const [currpage,setCurrpage] =useState(0)
const [pagesize,setPageSize] = useState(5);

const[status,setStatus] = useState('All')
const[policyprefix,setPolicyPrefix] = useState(0)

  
  let customerId = localStorage.getItem('genericId')
 

  console.log(customerId,"UserAccounts")
  const [accountData,setAccountData] = useState({})

  const getAccounts = async()=>{

    try {
      console.log(status,"I was called")
        if(custId !=null)
        customerId = custId
        // let response = await axios.get(`http://localhost:8080/maxlife/account/${customerId}/${currpage}/${pagesize}`)

        const response = await axios.get('http://localhost:8080/maxlife/allaccounts', {
          params: {
            policynoprefix:policyprefix,
            status:status,
            currpage: currpage,
            pagesize: pagesize
          }
        });

      // let response = await getCustomerAllAccountsUtil(customerId,currpage,pagesize)
      setAccountData()
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
  },[currpage,pagesize,status,policyprefix])

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
      <br/>
      <h4 style={{ display: 'flex', alignItems: 'center' }}>
  
  <div style={{ display: 'inline-block',marginRight:'2rem', width: '100px', height: '50px', borderRadius: '10px' }}>
    <select onChange={(e) => setPageSize(e.target.value)} className="form-control text-center" id="planStatus">
      <option value="5">5 Items</option>
      <option value="10">10 Items</option>
      <option value="15">15 Items</option>
    </select>
  </div>

  <div style={{ display: 'inline-block', width: '100px', marginRight:'2rem',height: '50px', borderRadius: '10px' }}>
    <select onChange={(e) => setStatus(e.target.value)} className="form-control text-center" id="planStatus">
      <option value="All">All</option>
      <option value="Active">Active</option>
      <option value="InActive">In Active</option>
    </select>
  </div>

  <div className="form-group" style={{ display: 'inline-block', width: '240px', height: '50px', border:'none',fontSize:'25px' }}>
    <input type="number" placeholder='Search by policyNo' className='form-control' onChange={(e) => { setPolicyPrefix(e.target.value || 0) }} style={{ width: '100%' }} />
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

export default AllAccounts
