import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold">E-Gram Panchayat</div>
          <button className="bg-blue-500 px-4 py-2 rounded">Logout</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar