import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddStaff = ({ url }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleAddStaff = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken'); 
      const response = await axios.post( `${url}/api/staff/add`, { name, email, password }, { headers: { Authorization: `Bearer ${token}`, }, });

      if (response.data.success) {
        toast.success('Staff added successfully');
        setName('');
        setEmail('');
        setPassword('');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Failed to add staff');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-semibold text-center mb-6 text-primary">Add Staff</h2>
        <form onSubmit={handleAddStaff}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Enter staff name"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Enter staff email"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter password"/>
          </div>
          <button type="submit" className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-buttonHover focus:ring-2 focus:ring-indigo-500 transition duration-300">
            Add Staff
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStaff;
