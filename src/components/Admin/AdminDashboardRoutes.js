import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'

import AdminMessages from './AdminMessages'


const AdminDashboardRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/admin/dashboard' element={<AdminDashboard/>}/>  
          <Route path="/admin/messages" element={<AdminMessages />} />
        </Routes>
      
    </div>
  )
}

export default AdminDashboardRoutes
