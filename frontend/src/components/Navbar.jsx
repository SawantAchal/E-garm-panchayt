import React, { useContext } from 'react'
import { StoreContext } from '../context/storeContext'
import { useNavigate } from 'react-router-dom'

const Navbar = ({setIsAuthenticated}) => {
  const {setToken} = useContext(StoreContext)
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("gram_panchayt")
    setIsAuthenticated(false)
    setToken("")
    navigate('/')
  }

  return (
    <>
      <nav className="bg-gray-800 text-white p-4 fixed w-full h-16 top-0 left-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold" onClick={() => navigate("/allServices")}>E-Gram Panchayat</div>
          <button onClick={logout} className="bg-blue-500 px-4 py-2 rounded">Logout</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar