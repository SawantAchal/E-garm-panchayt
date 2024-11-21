import React, { useState, useContext } from 'react';
import axios from 'axios';
import { StoreContext } from '../context/storeContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ApplicationForm = () => {
  const { url, token } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { serviceId, serviceName } = location.state;

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: ''
    // documents: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    // console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url+'/api/application/apply', { ...formData, serviceId }, { headers: {token: localStorage.getItem('gram_panchayt'),} });
        // console.log(response.data)
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
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Apply for {serviceName}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-medium">Full Name</label>
          <input type="text" name="fullName" className="w-full p-2 border rounded" required value={formData.fullName} onChange={handleChange}/>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Address</label>
          <input type="text" name="address" className="w-full p-2 border rounded" required value={formData.address} onChange={handleChange}/>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Phone Number</label>
          <input type="tel" name="phoneNumber" className="w-full p-2 border rounded" required value={formData.phoneNumber} onChange={handleChange}/>
        </div>
        {/* <div className="mb-4">
          <label className="block font-medium">Upload Documents</label>
          <input type="file" name="documents" className="w-full p-2 border rounded" onChange={handleChange}/>
        </div> */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
