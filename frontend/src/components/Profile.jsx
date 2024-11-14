import React from 'react'

const Profile = () => {
  return (
    <>
        <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">My Profile</h2>
            <div className="mb-4">
                <p><strong>Name:</strong> {'profileData.name'}</p>
                <p><strong>Email:</strong> {'profileData.email'}</p>
                <p><strong>Address:</strong> {'profileData.address'}</p>
                <p><strong>Phone Number:</strong> {'profileData.phoneNumber'}</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                {'isEditing' ? 'Cancel' : 'Edit Profile'}
            </button>
        </div>

    </>
  )
}

export default Profile