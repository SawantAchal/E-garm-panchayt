import { useState } from 'react'
import './App.css'
import AllApplication from './components/AllApplication'
import Login from './components/Login'
import Navbar from './components/Navbar'
import {Routes , Route ,Navigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState( !!localStorage.getItem('staffToken'));
  const url = 'http://localhost:4000'

  return (
    <>
      <ToastContainer/>
      {isAuthenticated && <Navbar url={url} setIsAuthenticated={setIsAuthenticated} />}
      <div className={` ${isAuthenticated ? 'pt-20' : ''} p-4`}>
        <Routes>
          <Route path="/" element={<Login url={url} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/applications" element={<ProtectedRoute isAuthenticated={isAuthenticated}> <AllApplication url={url} /> </ProtectedRoute>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
