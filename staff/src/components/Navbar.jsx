import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setIsAuthenticated }) => {
  const [token , setToken] = useState([])
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('staffToken');
    setIsAuthenticated(false);
    setToken('');
    navigate('/');
  };
  return (
    <nav className="h-20 bg-blue-800 flex items-center justify-between px-6 shadow-md">
      <div className="text-3xl font-semibold text-white">
        Staff Panel
      </div>
      <button onClick={logout} className="text-white bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"> 
        Logout
      </button>
    </nav>
  );
};

export default Navbar;

