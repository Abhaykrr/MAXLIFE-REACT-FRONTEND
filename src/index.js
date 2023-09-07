import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardRoutes from './components/User/DashboardRoutes';
import AdminDashboardRoutes from './components/Admin/AdminDashboardRoutes';
import EmployeeRoutes from './components/Employee/EmployeeRoutes';
import AgentDashboardRoutes from './components/Agent/AgentDashboardRoutes';
import NotFoundPage from './components/Shared Components/NotFound/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <App/>
   <AgentDashboardRoutes/>
   <AdminDashboardRoutes/>
   <DashboardRoutes/>
   <EmployeeRoutes/>
   <Routes>
   {/* <Route path="/*" element={<NotFoundPage/>} />  */}
   </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
