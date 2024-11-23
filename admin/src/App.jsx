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
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState( !!localStorage.getItem('adminToken'));
  const url = import.meta.env.VITE_BACKEND_URL

  return (
    <>
      <ToastContainer />
        <>
          {isAuthenticated && <Navbar url={url} setIsAuthenticated={setIsAuthenticated} />}
          {/* <Navbar setIsAuthenticated={setIsAuthenticated}/> */}
          <div  className={`flex pt-16 ${!isAuthenticated && 'justify-center bg-lightBg h-screen'}`}>
            {isAuthenticated && (<Sidebar className="w-1/4 min-h-screen" />)}
            <div className={`${isAuthenticated ? 'ml-80': ''} `}>
              <Routes>
                <Route path="/addService" element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AddService url={url} /></ProtectedRoute >} />
                <Route path="/allService" element={<ProtectedRoute isAuthenticated={isAuthenticated}><AllServices url={url} /></ProtectedRoute >} />
                <Route path="/addStaff" element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AddStaff url={url} /></ProtectedRoute >} />
                <Route path="/allStaff" element={<ProtectedRoute isAuthenticated={isAuthenticated}><AllStaff url={url} /></ProtectedRoute >} />
                <Route path="/allApplication" element={<ProtectedRoute isAuthenticated={isAuthenticated} ><AllApplication url={url} /></ProtectedRoute >} />
                <Route path="/" element={<Login url={url} setIsAuthenticated={setIsAuthenticated}/>} />
              </Routes>
            </div>
          </div>
        </>
    </>
  )
}

export default App
