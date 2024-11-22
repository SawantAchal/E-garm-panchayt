import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddService = ({ url }) => {
  const [data, setData] = useState({
    name: '',
    description: '',
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/service/addService`, data);
      if (response.data.success) {
        setData({
          name: '',
          description: '',
        });
        toast.success('Service added successfully!');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-24 p-6 bg-cardBg rounded-lg shadow-lg ">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">Add a New Service</h2>
      <form onSubmit={onSubmitHandler} className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-300 mb-2">Service Name</label>
          <input type="text" name="name" value={data.name} onChange={onChangeHandler} placeholder="Enter service name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required/>
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-300 mb-2">Description</label>
          <textarea name="description" value={data.description} onChange={onChangeHandler} placeholder="Enter service description" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" required />
        </div>
        <div className="text-center">
          <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-buttonHover transition duration-300">
            Add Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
