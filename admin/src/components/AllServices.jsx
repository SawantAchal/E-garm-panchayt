import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllServices = ({ url }) => {
  const [service, setService] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentServiceId, setCurrentServiceId] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedDescription, setUpdatedDescription] = useState('');

  const fetchAllService = async () => {
    try {
      const res = await axios.get(`${url}/api/service/allServices`);
      if (res.data.success) {
        setService(res.data.data);
      } else {
        toast.error('Error fetching services');
      }
    } catch (error) {
      console.error(error.message);
      toast.error('An error occurred while fetching services.');
    }
  };

  const removeService = async (serviceId) => {
    try {
      const response = await axios.post(url + '/api/service/removeService', { id: serviceId });
      if (response.data.success) {
        await fetchAllService();
        toast.success('Service removed successfully.');
      } else {
        toast.error('Error removing service');
      }
    } catch (error) {
      console.error(error.message);
      toast.error('An error occurred while removing service.');
    }
  };

  const openUpdatePopup = (serviceId, name, description) => {
    setCurrentServiceId(serviceId);
    setUpdatedName(name);
    setUpdatedDescription(description);
    setShowPopup(true);
  };

  const handleUpdateService = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${url}/api/service/updateService`, {
        serviceId: currentServiceId,
        name: updatedName,
        description: updatedDescription,
      });
      if (response.data.success) {
        toast.success('Service updated successfully');
        setShowPopup(false);
        fetchAllService();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while updating the service.');
    }
  };

  useEffect(() => {
    fetchAllService();
  }, []);

  return (
    <div className="container mx-auto p-6 mt-24">
      <h1 className="text-3xl font-semibold text-primary mb-6">All Services</h1>
      <div className="space-y-6">
        {service.map((service) => (
          <div key={service._id} className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-semibold text-gray-800">{service.name}</p>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
              <div className="flex space-x-4">
                <button className="text-indigo-600 hover:text-indigo-800 transition-colors" onClick={() => openUpdatePopup(service._id, service.name, service.description)}>
                  Update
                </button>
                <button onClick={() => removeService(service._id)} className="text-red-500 hover:text-red-700 transition-colors">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 transition-transform transform scale-105">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Update Service</h2>
            <form onSubmit={handleUpdateService}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Service Name</label>
                <input type="text" name="name" value={updatedName} onChange={(e) => setUpdatedName(e.target.value)} className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Service Name"/>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Service Description</label>
                <input type="text" name="description" value={updatedDescription} onChange={(e) => setUpdatedDescription(e.target.value)} className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 transition-all" placeholder="Service Description"/>
              </div>
              <div className="flex justify-between space-x-4">
                <button type="submit" className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors">
                  Update
                </button>
                <button type="button" onClick={() => setShowPopup(false)} className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition-colors">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllServices;
