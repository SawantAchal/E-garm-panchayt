import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/storeContext'
import axios from 'axios'

const Profile = () => {
  const {url , token} = useContext(StoreContext)
  const [profile , setProfile] = useState([])

  const fetchUserProfile = async () => {
    const response = await axios.get(url+'/api/user/profile' , {headers:{token}})
    console.log('profile' , response.data.data)
    if (response.data.success) {
      setProfile(response.data.data)
    } else {
      console.log('error')
    }
  }

  useEffect(() => {
    fetchUserProfile()
  },[url])

  return (
    <>
        <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">My Profile</h2>
            <div className="mb-4">
                <p><strong>Name:</strong> {profile.name}</p>
                <p><strong>Email:</strong> {profile.email}</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
                {'isEditing' ? 'Cancel' : 'Edit Profile'}
            </button>
        </div>

    </>
  )
}

export default Profile