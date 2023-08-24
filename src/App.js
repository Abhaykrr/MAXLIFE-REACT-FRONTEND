import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/User/Dashboard';
import Login from './components/login/Login.js';

function App() {
  return (
   <>
      <Routes>   
        <Route path='/login' element={<Login/>}/>
      </Routes> 
   </>
  );
}

export default App;
