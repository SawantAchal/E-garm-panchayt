import './App.css'
import AllServices from './components/AllServices'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ApplicationForm from './components/ApplicationForm'
import ApplicationStatus from './components/ApplicationStatus'
import Profile from './components/Profile'
import { Navigate, Route, Routes } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('gram_panchayt')
  );

  return (
    <>
      <ToastContainer/>
      <Navbar setIsAuthenticated={setIsAuthenticated}/>
      <div className={`flex pt-16 ${!isAuthenticated && 'justify-center'}`}>
      {isAuthenticated && <Sidebar className="w-1/4 min-h-screen" />}
        <div className={`flex-1 ${isAuthenticated ? 'ml-64' : ''}`}>
          <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />}/>
            <Route path='/allServices' element={<ProtectedRoute isAuthenticated={isAuthenticated}><AllServices/></ProtectedRoute>}/>
            <Route path='/applicationStatus' element={<ProtectedRoute isAuthenticated={isAuthenticated}><ApplicationStatus/></ProtectedRoute>}/>
            <Route path='/profile' element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile/></ProtectedRoute>}/>
            <Route path='/appliForm' element={<ProtectedRoute isAuthenticated={isAuthenticated}><ApplicationForm/></ProtectedRoute>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
