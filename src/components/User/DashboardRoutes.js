import React from 'react'
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Dashboard from './Dashboard';
import UserAccounts from './UserAccounts';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/user/dashboard' element={<Dashboard/>}/>  
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/user/accounts" element={<UserAccounts />} />
    </Routes>
  )
}

export default DashboardRoutes
