import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EmployeeDashboard from './EmployeeDashboard'
import AddPlan from '../Admin/AddPlan'
import AddScheme from '../Admin/AddScheme'
import EditPlan from '../Admin/EditPlan'
import EditScheme from '../Admin/EditScheme'
import Adminusers from '../Admin/AdminUsers'
import AdminEmployes from '../Admin/AdminEmployes'
import AdminAgent from '../Admin/AdminAgent'
import Addemploye from '../Admin/AddEmploye'
import EditEmploye from '../Admin/EditEmploye'
import AddAgent from '../Admin/AddAgent'
import EditAgents from '../Admin/EditAgent'
import AdminMessages from '../Admin/AdminMessages'



const EmployeeRoutes = () => {
  return (
    <div> 
        <Routes>
          <Route path='/employee/dashboard' element={<EmployeeDashboard/>}/>  

          <Route path='/employee/dashboard/addplan' element={<AddPlan/>}/>  
          <Route path='/employee/dashboard/addscheme' element={<AddScheme/>}/> 
          <Route path='/employee/dashboard/editplan' element={<EditPlan/>}/> 
          <Route path='/employee/dashboard/editscheme' element={<EditScheme/>}/> 
          <Route path='/employee/dashboard/allusers' element={<Adminusers/>}/>
          <Route path='/employee/dashboard/allemployes' element={<AdminEmployes/>}/>  
          <Route path='/employee/dashboard/allagent' element={<AdminAgent/>}/>  
          <Route path='/employee/dashboard/addemploye' element={<Addemploye/>}/> 
          <Route path='/employee/dashboard/editemploye' element={<EditEmploye/>}/>  
          <Route path='/employee/dashboard/addagent' element={<AddAgent/>}/>  
          <Route path='/employee/dashboard/editagent' element={<EditAgents/>}/>  
          <Route path='/employee/dashboard//messages' element={<AdminMessages/>}/> 


        </Routes>
      
    </div>
  )
}

export default EmployeeRoutes
