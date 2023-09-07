import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AgentDashboard from './AgentDashboard'
import AgentCustomers from './AgentCustomers'
import AgentClaims from './DisplayClaims'
import AgentMarketing from './AgentMarketing'
import NotFoundPage from '../Shared Components/NotFound/NotFoundPage'
const AgentDashboardRoutes = () => {

  const roleId = localStorage.getItem('roleId')

  return (
    <div>
    <Routes>
    {roleId === '4' && (
      <>
      <Route path='/agent/dashboard' element={<AgentDashboard/>}/>  
      <Route path='/agent/dashboard/mycustomers' element={<AgentCustomers/>}/>  
      <Route path='/agent/dashboard/viewclaim' element={<AgentClaims/>} />
      <Route path='/agent/dashboard/marketing' element={<AgentMarketing/>} />
      </>
    )}
      {/* <Route path="/user/*" element={<NotFoundPage/>} />
      <Route path="/*" element={<NotFoundPage/>} /> */}

    </Routes>
  
</div>
  )
}

export default AgentDashboardRoutes
