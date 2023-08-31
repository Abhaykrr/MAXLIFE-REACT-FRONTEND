import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
import AddPlan from './AddPlan'
import AddScheme from './AddScheme'
import EditPlan from './EditPlan'
import EditScheme from './EditScheme'
import Adminusers from './AdminUsers'
import AdminEmployes from './AdminEmployes'
import AdminAgent from './AdminAgent'
import Addemploye from './AddEmploye'
import EditEmploye from './EditEmploye'
import AddAgent from './AddAgent'
import EditAgents from './EditAgent'
const AdminDashboardRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/admin/dashboard' element={<AdminDashboard/>}/>  
          <Route path='/admin/dashboard/addplan' element={<AddPlan/>}/>  
          <Route path='/admin/dashboard/addscheme' element={<AddScheme/>}/> 
          <Route path='/admin/dashboard/editplan' element={<EditPlan/>}/> 
          <Route path='/admin/dashboard/editscheme' element={<EditScheme/>}/> 
          <Route path='/admin/dashboard/allusers' element={<Adminusers/>}/>
          <Route path='/admin/dashboard/allemployes' element={<AdminEmployes/>}/>  
          <Route path='/admin/dashboard/allagent' element={<AdminAgent/>}/>  
          <Route path='/admin/dashboard/addemploye' element={<Addemploye/>}/> 
          <Route path='/admin/dashboard/editemploye' element={<EditEmploye/>}/>  
          <Route path='/admin/dashboard/addagent' element={<AddAgent/>}/>  
          <Route path='/admin/dashboard/editagent' element={<EditAgents/>}/>  
        </Routes>
      
    </div>
  )
}

export default AdminDashboardRoutes
