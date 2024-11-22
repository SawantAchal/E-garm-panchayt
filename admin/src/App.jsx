import './App.css'
import {Routes , Route } from 'react-router-dom'
import AddService from './components/AddService'
import AllServices from './components/AllServices'
import AddStaff from './components/AddStaff'
import AllStaff from './components/AllStaff'
import Navbar from './components/Navbar'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import { useState } from 'react'
import AllApplication from './components/AllApplication'
import 'dotenv'

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState( !!localStorage.getItem('adminToken'));
  const url = import.meta.env.VITE_BACKEND_URL

  return (
    <>
      <ToastContainer />
        <>
          <Navbar setIsAuthenticated={setIsAuthenticated}/>
          <div  className={`flex pt-16 ${!isAuthenticated && 'justify-center bg-lightBg h-screen'}`}>
            {isAuthenticated && (<Sidebar className="w-1/4 min-h-screen" />)}
            <div className={`flex-1 ml-64 ${isAuthenticated ? 'ml-64' : ''} p-4`}>
              <Routes>
                <Route path="/addService" element={<AddService url={url} setIsAuthenticated={setIsAuthenticated}/>} />
                <Route path="/allService" element={<AllServices url={url} setIsAuthenticated={setIsAuthenticated}/>} />
                <Route path="/addStaff" element={<AddStaff url={url} setIsAuthenticated={setIsAuthenticated}/>} />
                <Route path="/allStaff" element={<AllStaff url={url}setIsAuthenticated={setIsAuthenticated} />} />
                <Route path="/allApplication" element={<AllApplication url={url} setIsAuthenticated={setIsAuthenticated}/>} />
                <Route path="/login" element={<Login url={url} setIsAuthenticated={setIsAuthenticated}/>} />
              </Routes>
            </div>
          </div>
        </>
    </>
  )
}

export default App
