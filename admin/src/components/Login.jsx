import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ url , setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post(`${url}/api/admin/adminLogin`, { email, password });
      if (response.data.success) {
        localStorage.setItem('adminToken', response.data.token);
        setIsAuthenticated(true);
        navigate('/addService'); 
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-darkBg">
      <div className="bg-cardBg rounded-lg shadow-xl p-8 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
            <input type="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-buttonHover transition duration-300" >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
