import React, { useState } from 'react'

const Login = () => {
    const [currentState , setCurrentState] = useState("login")
  return (
    <>
        <div className='fixed inset-0 z-10 w-full h-full bg-neutral-800 bg-opacity-50 flex justify-center items-center'>
            <form className='w-[max(23vw,330px)] bg-white text-gray-600 flex flex-col gap-6 rounded-lg shadow-lg animate-fadeIn p-8'>
                <div className='flex justify-between items-center text-xl font-semibold text-gray-800'>
                    <h2>{currentState}</h2>
                </div>
                <div className='flex flex-col gap-5'>
                {/* to remove input field when state is login */}
                {
                    currentState==="login"? <></> :<input type='text' name='name'  placeholder='Your Name' required className='border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500' />
                }
                <input type='email' name='email' placeholder='Your Email id' required className='border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'/>
                <input type='password' name='password' placeholder='Password' required className='border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500'/>
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