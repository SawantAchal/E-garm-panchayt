import React, { useContext, useState } from 'react'
import { StoreContext } from '../context/storeContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [currentState , setCurrentState] = useState("login")
    const {url , token , setToken} = useContext(StoreContext)
    const navigate = useNavigate()

    const [data, setData] = useState({
        name:'' ,
        email:'',
        password:''
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name
        const value = event.target.value
        setData(data => ({...data,[name]:value}))
    }

    const onSubmit = async (e) => {
        e.preventDefault() ;
        let newUrl = url
        if (currentState === 'login') {
            newUrl += '/api/user/login'
        } else {
            newUrl += '/api/user/register'
        }
        const response = await axios.post(newUrl, data)
        if (response.data.success) {
            setToken(response.data.token)
            console.log(response.data.data)
            localStorage.setItem('gram panchayt' , response.data.token)
            toast.success('login successfully')
            // navigate('/')
        } else {
            toast.error(response.data.message)
        }
    }

  return (
    <>
        <div className=' inset-0 z-10 w-full h-full an bg-opacity-50 flex'>
            <form onSubmit={onSubmit} className='w-[max(23vw,330px)] bg-white text-gray-600 flex flex-col gap-6 rounded-lg shadow-lg animate-fadeIn p-8'>
                <div className='flex justify-between items-center text-xl font-semibold text-gray-800'>
                    <h2>{currentState}</h2>
                </div>
                <div className='flex flex-col gap-5'>
                {/* to remove input field when state is login */}
                {
                    currentState==="login"? <></> :<input type='text' name='name'value={data.name}   onChange={onChangeHandler} placeholder='Your Name' required className='border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500' />
                }
                <input type='email' onChange={onChangeHandler} value={data.email} name='email' placeholder='Your Email id' required className='border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'/>
                <input type='password' onChange={onChangeHandler} value={data.password} name='password' placeholder='Password' required className='border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'/>
            </div>
            <button type='submit' className='p-3 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition duration-300'>
                {
                    currentState==="Sign Up" ? "Create account" : "Login"
                }
            </button>
            {
                currentState==="login"?<p className="text-sm">Create a new account? {" "}<span onClick={() => setCurrentState("Sign Up")} className='text-red-700 cursor-pointer font-medium'>Click here</span></p>:<p className="text-sm">Already have an account? {" "}<span onClick={() => setCurrentState("login")}  className='text-red-700 cursor-pointer font-medium'>Login here</span></p>
            }
        </form>
    </div>
    </>
  )
}

export default Login