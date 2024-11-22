import React, { useContext } from 'react';
import { StoreContext } from '../context/storeContext';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setIsAuthenticated }) => {
  const [token , setToken] = useState([])
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('gram_panchayt');
    setIsAuthenticated(false);
    setToken('');
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-primary to-secondary text-white fixed w-full h-16 top-0 left-0 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 h-full">
        <div className="text-xl font-bold cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate('/allServices')}>
          E-Gram Panchayat
        </div>
        <button onClick={logout} className="bg-accent1 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-600 transition duration-300">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
