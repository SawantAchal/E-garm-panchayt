import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = ({url , setIsAuthenticated}) => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url+'/api/staff/staffLogin' , data)
      if (response.data.success) {
        toast.success('login successfully')
        localStorage.setItem('staffToken', response.data.token); 
        setIsAuthenticated(true);// Save token for future requests
        navigate('/applications')
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-indigo-400 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input name="email" type="email" placeholder="Enter your email" value={data.email} onChange={onChangeHandler} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input name="password" type="password" placeholder="Enter your password" value={data.password} onChange={onChangeHandler} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
          </div>
          <button type="submit" className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
