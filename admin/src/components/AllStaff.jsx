import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const AllStaff = ({ url }) => {
  const [staff, setStaff] = useState([]);

  const fetchAllStaff = async () => {
    try {
      const res = await axios.get(`${url}/api/staff/allStaff`);
      if (res.data.success) {
        setStaff(res.data.data);
      } else {
        toast.error('Error fetching staff');
      }
    } catch (error) {
      console.error(error.message);
      toast.error('An error occurred while fetching staff.');
    }
  };

  const removeStaff = async (staffId) => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await axios.post(
        `${url}/api/staff/remove`,
        { id: staffId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.data.success) {
        await fetchAllStaff();
        toast.success('Staff removed successfully.');
      } else {
        toast.error('Error removing staff');
      }
    } catch (error) {
      console.error(error.message);
      toast.error('An error occurred while removing staff.');
    }
  };

  useEffect(() => {
    fetchAllStaff();
  }, []);

  return (
    <div className="container mx-auto p-6 mt-24">
      <h1 className="text-3xl font-semibold text-primary mb-6">All Staff</h1>
      <div className="space-y-6">
        {staff.map((staf, index) => (
          <div key={staf._id} className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow" >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold text-gray-800">Name: {staf.name}</p>
                <p className="text-sm text-gray-600">Email: {staf.email}</p>
                <p className="text-sm text-gray-500">Created Date: {new Date(staf.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="flex space-x-4">
                <button onClick={() => removeStaff(staf._id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                  Remove Staff
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStaff;
