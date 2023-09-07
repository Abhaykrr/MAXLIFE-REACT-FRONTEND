import React from 'react'
import { Route, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';
import Dashboard from './Dashboard';
import UserAccounts from './UserAccounts';
import Messages from './Messages';
import SelfClaims from './DisplayClaims';
import NotFoundPage from '../Shared Components/NotFound/NotFoundPage';
const DashboardRoutes = () => {

  const roleId = localStorage.getItem('roleId')

  return (
    <Routes>
      {roleId === '1' && (
      <>
      <Route path='/user/dashboard' element={<Dashboard/>}/>  
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/user/messages" element={<Messages />} />
      <Route path="/user/accounts" element={<UserAccounts />} />
      <Route path="/user/claims" element={<SelfClaims/>} />
      </>
      )}
      {/* <Route path="/user/*" element={<NotFoundPage/>} />
      <Route path="/*" element={<NotFoundPage/>} /> */}

    </Routes>
  )
}

export default DashboardRoutes
