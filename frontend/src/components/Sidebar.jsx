import React from 'react'

const Sidebar = () => {
  return (
    <>
        <div className="bg-gray-100 w-60 p-4">
            <ul>
                <li className="block p-2 text-blue-500 cursor-pointer">Dashboard</li>
                <li className="block p-2 text-blue-500 cursor-pointer">Services</li>
                <li className="block p-2 text-blue-500 cursor-pointer">Application Status</li>
                <li className="block p-2 text-blue-500 cursor-pointer">Profile</li>
            </ul>
        </div>
    </>
  )
}

export default Sidebar