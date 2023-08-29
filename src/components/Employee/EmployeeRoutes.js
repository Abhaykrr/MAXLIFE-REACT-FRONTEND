import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployeeDashboard from './EmployeeDashboard'


const EmployeeRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/employee/dashboard' element={<EmployeeDashboard/>}/>  
        </Routes>
      
    </div>
  )
}

export default EmployeeRoutes
