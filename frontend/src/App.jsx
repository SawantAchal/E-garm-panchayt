import AllServices from './components/AllServices';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ApplicationForm from './components/ApplicationForm';
import Profile from './components/Profile';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


const ProtectedRoute = ({ children, isAuthenticated }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState( !!localStorage.getItem('gram_panchayt'));
  const url = import.meta.env.VITE_BACKEND_URL;

  return (
    <>
      <ToastContainer />
      <Navbar setIsAuthenticated={setIsAuthenticated} />
      {/* Main Layout */}
      <div className={`flex pt-16 ${!isAuthenticated && 'justify-center bg-lightBg h-screen'}`}>
        {/* Sidebar */}
        {isAuthenticated && (<Sidebar className="w-64 bg-darkBg text-white min-h-screen" /> )}
        {/* Content */}
        <div className={`flex-1 bg-gradient-to-r from-lightBg to-secondary ${isAuthenticated ? 'ml-64' : ''} p-4`}>
          <Routes>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} url={url}/>}/>
            <Route path="/allServices" element={ <ProtectedRoute isAuthenticated={isAuthenticated}> <AllServices  url={url}/> </ProtectedRoute> }/>
            <Route path="/profile" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile url={url} /></ProtectedRoute>} />
            <Route path="/appliForm" element={<ProtectedRoute isAuthenticated={isAuthenticated}><ApplicationForm url={url} /></ProtectedRoute> } />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
