import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AgentDashboard from './AgentDashboard'
import AgentCustomers from './AgentCustomers'
import AgentClaims from './DisplayClaims'
import AgentMarketing from './AgentMarketing'
import Agentanalysis from './Analysis'
const AgentDashboardRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path='/agent/dashboard' element={<AgentDashboard/>}/>  
      <Route path='/agent/dashboard/mycustomers' element={<AgentCustomers/>}/>  
      <Route path='/agent/dashboard/viewclaim' element={<AgentClaims/>} />
      <Route path='/agent/dashboard/marketing' element={<AgentMarketing/>} />
      <Route path='/agent/dashboard/analysis' element={<Agentanalysis/>} />

    </Routes>
  
</div>
  )
}

export default AgentDashboardRoutes
