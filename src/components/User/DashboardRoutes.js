import React from 'react'
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Dashboard from './Dashboard';

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path='/user' element={<Dashboard/>}/>  
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  )
}

export default DashboardRoutes
