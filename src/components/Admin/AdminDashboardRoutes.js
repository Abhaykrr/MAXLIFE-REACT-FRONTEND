import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
import AddPlan from './AddPlan'
import AddScheme from './AddScheme'
import EditPlan from './EditPlan'
import EditScheme from './EditScheme'


const AdminDashboardRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/admin/dashboard' element={<AdminDashboard/>}/>  
          <Route path='/admin/dashboard/addplan' element={<AddPlan/>}/>  
          <Route path='/admin/dashboard/addscheme' element={<AddScheme/>}/> 
          <Route path='/admin/dashboard/editplan' element={<EditPlan/>}/> 
          <Route path='/admin/dashboard/editscheme' element={<EditScheme/>}/> 
        </Routes>
      
    </div>
  )
}

export default AdminDashboardRoutes
