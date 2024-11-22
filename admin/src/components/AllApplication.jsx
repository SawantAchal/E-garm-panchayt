import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const AllApplication = ({ url }) => {
  const [application, setApplication] = useState([]);

  const fetchAllApplication = async () => {
    try {
      const res = await axios.get(`${url}/api/application/allApplication`);
      if (res.data.success) {
        setApplication(res.data.data);
      } else {
        toast.error('Error fetching applications');
      }
    } catch (error) {
      console.error(error.message);
      toast.error('An error occurred while fetching applications.');
    }
  };

  const statusHandler = async (e, applicationId) => {
    try {
      const response = await axios.post(url + '/api/application/applicationStatus', {
        applicationId,
        status: e.target.value,
      });
      if (response.data.success) {
        await fetchAllApplication();
        toast.success('Status update successful')
      } else {
        toast.error('Error updating application status');
      }
    } catch (error) {
      toast.error('Error updating application status');
    }
  };

  useEffect(() => {
    fetchAllApplication();
  }, []);

  return (
    <div className="container mx-auto p-6 mt-24">
      <h1 className="text-3xl font-semibold text-primary mb-6">All Applications</h1>
      <div className="space-y-6">
        {application.map((app, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow" >
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-lg font-semibold text-gray-800">Name: {app.fullName}</p>
                <p className="text-sm text-gray-600">Service Name: {app.serviceName}</p>
                <p className="text-sm text-gray-600">Applied Date: {new Date(app.createdAt).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone: {app.phoneNumber}</p>
                <p className="text-sm text-gray-600">Address: {app.address}</p>
              </div>
            </div>
            <div className="flex justify-end">
              <select onChange={(e) => statusHandler(e, app._id)} value={app.status} className="bg-gray-200 border border-gray-400 p-2 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none">
                <option value="pending">Pending</option>
                <option value="rejected">Rejected</option>
                <option value="approved">Approved</option>
              </select>
            </div>
            <hr className="my-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllApplication;
