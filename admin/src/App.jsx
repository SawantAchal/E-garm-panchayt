import './App.css'
import {Routes , Route} from 'react-router-dom'
import AddService from './components/AddService'
import AllServices from './components/AllServices'
import AddStaff from './components/AddStaff'
import AllStaff from './components/AllStaff'
import Navbar from './components/Navbar'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './components/Sidebar'

function App() {
  const url = 'http://localhost:4000'

  return (
    <>
      <ToastContainer/>
      <Navbar/>
      <div className='flex pt-16'>
        <Sidebar className="w-1/4 min-h-screen "/>
        <div className='flex-1 ml-64'>
          <Routes>
            <Route path='/addService' element={<AddService url={url}/>} />
            <Route path='/allService' element={<AllServices url={url}/>} />
            <Route path='/addStaff' element={<AddStaff  url={url}/>} />
            <Route path='/allStaff' element={<AllStaff  url={url}/>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
