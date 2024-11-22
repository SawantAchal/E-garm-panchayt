import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setIsAuthenticated }) => {
  const [token , setToken] = useState([])
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
    setToken('');
    navigate('/');
  };

  return (
    <nav className="bg-primary text-white flex justify-between items-center h-16 px-6 shadow-md fixed w-full z-50">
      {/* Title */}
      <h1 className="text-2xl font-bold">Admin Panel</h1>

      {/* Logout Button */}
      <button onClick={logout} className="bg-secondary text-white px-4 py-2 rounded-md font-medium hover:bg-secondaryHover transition duration-300">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
