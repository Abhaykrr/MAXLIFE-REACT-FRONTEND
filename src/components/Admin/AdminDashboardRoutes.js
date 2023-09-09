import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './AdminDashboard'
import AddPlan from './AddPlan'
import AddScheme from './AddScheme'
import EditPlan from './EditPlan'
import EditScheme from './EditScheme'
import Adminusers from '../User/DisplayUsers'
import AdminEmployes from '../Employee/DisplayEmploye'
import AdminAgent from '../Agent/DisplayAgent'
import Addemploye from '../Employee/AddEmploye'
import EditEmploye from '../Employee/EditEmploye'
import AddAgent from '../Agent/AddAgent'
import EditAgents from '../Agent/EditAgent'
import AdminMessage from './AdminMessages'
import AllAccounts from './AllAccounts'
import AllClaims from './AllClaims'
import AllWithdraws from './AllWithdraws'
import Adminanalysis from './AdminAnalysis'
import NotFoundPage from '../Shared Components/NotFound/NotFoundPage'
import BackGroundVerification from './BackGroundVerification'
const AdminDashboardRoutes = () => {

  const roleId = localStorage.getItem('roleId')


  return (
    <div> 
        <Routes>
        {roleId === '2' && (
      <>
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
          <Route path='/admin/dashboard/messages' element={<AdminMessage/>}/>  
          <Route path='/admin/dashboard/allaccounts' element={<AllAccounts/>}/> 
          <Route path='/admin/dashboard/allclaims' element={<AllClaims/>}/> 
          <Route path='/admin/dashboard/allwithdrawls' element={<AllWithdraws/>}/> 
          <Route path='/admin/dashboard/analysis' element={<Adminanalysis/>}/>  
          <Route path='/admin/dashboard/bgv' element={<BackGroundVerification/>}/> 
      </>    
        )}
        {/* <Route path="/admin/*" element={<NotFoundPage/>} />
        <Route path="/*" element={<NotFoundPage/>} /> */}

        </Routes>
      
    </div>
  )
}

export default AdminDashboardRoutes;
