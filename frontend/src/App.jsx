import './App.css'
import AllServices from './components/AllServices'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import ApplicationForm from './components/ApplicationForm'
import ApplicationStatus from './components/ApplicationStatus'
import Profile from './components/Profile'

function App() {

  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Login/>
      <AllServices/>
      <ApplicationForm/>
      <ApplicationStatus/>
      <Profile/>
    </>
  )
}

export default App
