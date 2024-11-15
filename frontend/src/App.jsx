import './App.css'
import AllServices from './components/AllServices'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ApplicationForm from './components/ApplicationForm'
import ApplicationStatus from './components/ApplicationStatus'
import Profile from './components/Profile'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <Login/>
      <div className='flex pt-16'>
        <Sidebar className="w-1/4 min-h-screen "/>
        <div className='flex-1 ml-64'>
          <Routes>
            <Route path='/allServices' element={<AllServices/>}/>
            <Route path='/applicationStatus' element={<ApplicationStatus/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/appliForm' element={<ApplicationForm/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
