import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
        <div className="bg-gray-100 w-60 p-4 h-screen fixed">
            <ul>
                <NavLink to={'/addService'} className={({ isActive }) => isActive ? "block p-2 text-white bg-blue-500 rounded" : "block p-2 text-gray-700 hover:bg-gray-300 rounded"}> Add Services</NavLink>
                <NavLink to={'/allService'} className={({ isActive }) =>  isActive ? "block p-2 text-white bg-blue-500 rounded" : "block p-2 text-gray-700 hover:bg-gray-300 rounded"}>All Services</NavLink>
                <NavLink to={'/addStaff'} className={({ isActive }) =>  isActive ? "block p-2 text-white bg-blue-500 rounded" : "block p-2 text-gray-700 hover:bg-gray-300 rounded"} >Add Staff</NavLink>
                <NavLink to={'/allStaff'} className={({ isActive }) =>  isActive ? "block p-2 text-white bg-blue-500 rounded" : "block p-2 text-gray-700 hover:bg-gray-300 rounded"} >All Staff</NavLink>
            </ul>
        </div>
    </>
  )
}

export default Sidebar