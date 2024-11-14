import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
      <div className="bg-gray-100 w-60 p-4 h-screen fixed">
        <ul>
          <NavLink to={'/allServices'} className={({ isActive }) => isActive ? "block p-2 text-white bg-blue-500 rounded" : "block p-2 text-gray-700 hover:bg-gray-300 rounded"}>Services</NavLink>
          <NavLink to={'/applicationStatus'} className={({ isActive }) =>  isActive ? "block p-2 text-white bg-blue-500 rounded" : "block p-2 text-gray-700 hover:bg-gray-300 rounded"}>Application Status</NavLink>
          <NavLink to={'/profile'} className={({ isActive }) =>  isActive ? "block p-2 text-white bg-blue-500 rounded" : "block p-2 text-gray-700 hover:bg-gray-300 rounded"} >Profile</NavLink>
        </ul>
      </div>
    </>
  )
}

export default Sidebar