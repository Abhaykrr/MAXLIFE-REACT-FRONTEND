import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/User/Dashboard';
import Login from './components/login/Login.js';
import Home from './pages/Home'
import Polices from './pages/Polices';
import Rough from './components/rough/Rough';


function App() {
  return (
   <>
      <Routes>   
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/policies' element={<Polices/>}/>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/rough' element={<Rough/>}/>
       
      </Routes>
   </>
  );
}

export default App;
