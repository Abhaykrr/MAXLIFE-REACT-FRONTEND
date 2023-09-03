import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Shared Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/User/Dashboard';
import Login from './components/login/Login.js';
import Home from './pages/Home'
import Polices from './pages/Polices';
import Adminusers from './components/User/DisplayUsers';
import Rough from './components/rough/Rough';
import Inovice from './pages/Inovice';
function App() {
  return (
   <>
      <Routes>   
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/policies' element={<Polices/>}/>


        <Route path='/rough' element={<Rough/>}/>
        <Route path='/invoice' element={<Inovice/>}/>

      </Routes>
   </>
  );
}

export default App;
