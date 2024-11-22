import React, { useState, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../context/storeContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ApplicationForm = ({url}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { serviceId, serviceName } = location.state;

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${url}/api/application/apply`,
        { ...formData, serviceId },
        { headers: { token: localStorage.getItem('gram_panchayt') } }
      );

      if (response.data.success) {
        toast.success('Application submitted successfully!');
        navigate('/profile');
      } else {
        toast.error('Error submitting application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Apply for {serviceName}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700"> Full Name </label>
          <input type="text" name="fullName" id="fullName" className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary" required value={formData.fullName} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700"> Address</label>
          <input type="text" name="address" id="address" className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary" required value={formData.address} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700"> Phone Number</label>
          <input type="tel" name="phoneNumber" id="phoneNumber" className="w-full mt-1 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-primary focus:border-primary" required value={formData.phoneNumber} onChange={handleChange}/>
        </div>
        <div className="text-center">
          <button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg font-bold hover:opacity-90 transition duration-300">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
