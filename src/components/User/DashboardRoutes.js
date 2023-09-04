import React from 'react'
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Dashboard from './Dashboard';
import UserAccounts from './UserAccounts';
import Messages from './Messages';
import SelfClaims from './DisplayClaims';
const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/user/dashboard' element={<Dashboard/>}/>  
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/user/messages" element={<Messages />} />
      <Route path="/user/accounts" element={<UserAccounts />} />
      <Route path="/user/claims" element={<SelfClaims/>} />
     
    </Routes>
  )
}

export default DashboardRoutes
