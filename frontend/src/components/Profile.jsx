import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../context/storeContext'
import axios from 'axios'

const Profile = () => {
  const {url } = useContext(StoreContext)
  const [profile , setProfile] = useState([])
 
  const fetchUserProfile = async () => {
    const response = await axios.get(url+'/api/user/profile' , {headers:{token:localStorage.getItem('gram_panchayt'),}})
    // console.log('profile' , response.data.data)
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
        <h3 className="mt-6 font-semibold">Applied Services</h3>
        <ul className="list-disc ml-5">
          {
            profile.applicationCart?.map((app, index) => (
              <li key={index}>
                <p><strong>Service Name:</strong> {app.serviceName}</p>
                <p><strong>Full Name:</strong> {app.fullName}</p>
                <p><strong>Status:</strong> {app.status}</p>
                <p><strong>Date:</strong> {new Date(app.date).toLocaleDateString()}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}

export default Profile