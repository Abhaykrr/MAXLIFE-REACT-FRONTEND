import React, { useEffect, useState } from 'react'
import "../CSS/navbar.css"
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Navbar = () => {

  const navigate = useNavigate()


  const doLogout = ()=>{
    localStorage.clear()
    navigate("/")
    return
  }

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const[roleName,setRoleName] = useState()
    const[userName,setUserName] = useState()

    const fetchUserDetails = ()=>{
      setRoleName(localStorage.getItem('roleName').split('_')[1])
      setUserName(localStorage.getItem('username'))
    }

    useEffect(()=>{
      fetchUserDetails()
    })

    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    if(roleName == 'CUSTOMER')
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
     
    <div className="logo-details">
      <i className="bx bxl-c-plus-plus icon"></i>
      <div className="logo_name">My Portfolio</div>
      <i className={`bx ${isSidebarOpen ? 'bx-menu-alt-right' : 'bx-menu'}`} id="btn" onClick={toggleSidebar}></i>

    </div>
    <ul className="nav-list">

    <li>
         <a href="/" >
           <i className="bx bx-home"></i>
           <span id="db" className="links_name">Home</span>
         </a>
         <span className="tooltip">Home</span>
       </li>
      
      <li>
        <a href="/user/dashboard" >
          <i className="bx bx-grid-alt"></i>
          <span id="db" className="links_name">Dashboard</span>
        </a>
        <span className="tooltip">Dashboard</span>
      </li>

      <li>
        <a href="/user/accounts" >
          <i className="bx bx-user"></i>
          <span className="links_name">Accounts</span>
        </a>
        <span className="tooltip">Accounts</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-chat"></i>
          <span className="links_name">Messages</span>
        </a>
        <span className="tooltip">Messages</span>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-pie-chart-alt-2"></i>
          <span className="links_name">Analytics</span>
        </a>
        <span className="tooltip">Analytics</span>
      </li>
      
      <li>
        <a href="/user/profile">
          <i className="bx bx-cog"></i>
          <span className="links_name">Setting</span>
        </a>
        <span className="tooltip">Setting</span>
      </li>
      <li className="profile">
        <div className="profile-details">
          {/* <img src="profile.jpg" alt="profileImg" /> */}
          <div className="name_job">
            <div className="name">{userName}</div>
            <div className="job">{roleName}</div>
          </div>
        </div>
        <i className="bx bx-log-out" id="log_out" onClick={doLogout}></i>
      </li>
    </ul>

   
  </div>
  )


  if(roleName == 'ADMIN')
  return(

<div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
  <Helmet>
  <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
  </Helmet>
     <div className="logo-details">
       <i className="bx bxl-c-plus-plus icon"></i>
       <div className="logo_name">Admin Panel</div>
       <i className={`bx ${isSidebarOpen ? 'bx-menu-alt-right' : 'bx-menu'}`} id="btn" onClick={toggleSidebar}></i>
 
     </div>
     <ul className="nav-list">

     <li>
         <a href="/" >
           <i className="bx bx-home"></i>
           <span id="db" className="links_name">Home</span>
         </a>
         <span className="tooltip">Home</span>
       </li>
       
       <li>
         <a href="/admin/dashboard" >
           <i className="bx bx-grid-alt"></i>
           <span id="db" className="links_name">Dashboard</span>
         </a>
         <span className="tooltip">Dashboard</span>
       </li>
       <li>
         <a href="/admin/dashboard/allusers" >
           <i className="bx bx-user"></i>
           <span className="links_name">Users</span>
         </a>
         <span className="tooltip">Users</span>
       </li>

       <li>
         <a href="/admin/dashboard/allagent" >
         <i class='bx bx-run'></i>  
           <span className="links_name">Agents</span>
         </a>
         <span className="tooltip">Agents</span>
       </li>

       <li>
         <a href="/admin/dashboard/allemployes" >
         <i className='bx bxs-group'></i>

           <span className="links_name">Employees</span>
         </a>
         <span className="tooltip">Employees</span>
       </li>
       <li>
         <a href="#">
           <i className="bx bx-chat"></i>
           <span className="links_name">Messages</span>
         </a>
         <span className="tooltip">Messages</span>
       </li>
       <li>
         <a href="#">
           <i className="bx bx-pie-chart-alt-2"></i>
           <span className="links_name">Analytics</span>
         </a>
         <span className="tooltip">Analytics</span>
       </li>
       
      
       <li>
         <a href="/profile">
           <i className="bx bx-cog"></i>
           <span className="links_name">Setting</span>
         </a>
         <span className="tooltip">Setting</span>
       </li>
       <li className="profile">
         <div className="profile-details">
           {/* <img src="profile.jpg" alt="profileImg" /> */}
           <div className="name_job">
             <div className="name">{userName}</div>
             <div className="job">{roleName}</div>
           </div>
         </div>
         <i className="bx bx-log-out" id="log_out" onClick={doLogout}></i>
       </li>
     </ul>
 
    
   </div>
    )
}

export default Navbar
