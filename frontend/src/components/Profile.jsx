import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../context/storeContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = ({url}) => {
  const [profile, setProfile] = useState([]);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.get(`${url}/api/user/profile`, {
        headers: { token: localStorage.getItem('gram_panchayt') },
      });
      if (response.data.success) {
        setProfile(response.data.data);
      } else {
        console.log('Error fetching profile');
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const updateStatus = async (applicationId, newStatus) => {
    try {
      const response = await axios.post(
        `${url}/api/application/applicationStatus`,
        { applicationId, status: newStatus }
      );
      if (response.data.success) {
        toast.success('Status updated successfully!');
        fetchUserProfile(); // Re-fetch the user's profile to update the UI
      } else {
        toast.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Something went wrong');
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [url]);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-primary mb-6">My Profile</h2>
      <div className="mb-6">
        <p className="text-xl">
          <strong>Name:</strong> {profile.name}
        </p>
        <p className="text-xl">
          <strong>Email:</strong> {profile.email}
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-secondary mb-4">Applied Services</h3>
      <div className="space-y-6">
        {profile.applicationCart?.map((app, index) => (
          <div key={index} className="bg-lightBg p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <p className="text-xl font-semibold text-primary">
              <strong>Service Name:</strong> {app.serviceName}
            </p>
            <p className="text-lg text-secondaryText">
              <strong>Full Name:</strong> {app.fullName}
            </p>
            <p className="text-lg text-secondaryText">
              <strong>Status:</strong>{' '}
              <span
                className={`${
                  app.status === 'Pending'
                    ? 'text-accent2'
                    : app.status === 'Approved'
                    ? 'text-primary'
                    : 'text-accent1'
                } font-bold`}
              >
                {app.status}
              </span>
            </p>
            <p className="text-lg text-secondaryText">
              <strong>Date:</strong> {new Date(app.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
