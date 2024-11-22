import React, { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../context/storeContext';

const Login = ({ setIsAuthenticated }) => {
  const [currentState, setCurrentState] = useState('login');
  const { url, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    if (name === 'confirmPassword') {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: value !== data.password ? 'Passwords do not match' : '' }));
    }
  };

  const validateForm = () => {
    let valid = true;
    let validationErrors = {};
    if (currentState === 'Sign Up') {
      if (data.password !== data.confirmPassword) {
        validationErrors.confirmPassword = 'Passwords do not match';
        valid = false;
      }
    }
    setErrors(validationErrors);
    return valid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    let endpoint = `${url}/api/user/${currentState === 'login' ? 'login' : 'register'}`;
    try {
      const response = await axios.post(endpoint, data);
      if (response.data.success) {
        if (currentState === 'login') {
          setToken(response.data.token);
          localStorage.setItem('gram_panchayt', response.data.token);
          setIsAuthenticated(true);
          toast.success('Login successful');
          navigate('/allServices');
        } else {
          toast.success('Signup successful! Please login.');
          setCurrentState('login');
        }
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="inset-0 z-10 w-full h-full flex bg-gray-100 bg-opacity-50">
      <form onSubmit={onSubmit} className="w-[max(23vw,330px)] bg-white text-gray-600 flex flex-col gap-6 rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center text-xl font-semibold text-gray-800">
          <h2>{currentState === 'login' ? 'Login' : 'Sign Up'}</h2>
        </div>
        <div className="flex flex-col gap-5">
          {currentState === 'Sign Up' && (
            <input type="text" name="name" value={data.name} onChange={onChangeHandler} placeholder="Your Name" required className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
          )}
          <input type="email" name="email" value={data.email} onChange={onChangeHandler} placeholder="Your Email" required className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
          <input type="password" name="password" value={data.password} onChange={onChangeHandler} placeholder="Password" required className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
          {currentState === 'Sign Up' && (
            <>
              <input type="password" name="confirmPassword" value={data.confirmPassword} onChange={onChangeHandler} placeholder="Confirm Password" required className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"/>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
              )}
            </>
          )}
        </div>
        <button type="submit" className="p-3 rounded-lg bg-primary text-white text-sm font-medium hover:bg-green-600 transition duration-300">
          {currentState === 'login' ? 'Login' : 'Create Account'}
        </button>
        {currentState === 'login' ? (
          <p className="text-sm"> Create a new account?{' '} <span onClick={() => setCurrentState('Sign Up')} className="text-primary cursor-pointer font-medium" > Click here </span> </p>
        ) : (
          <p className="text-sm"> Already have an account?{' '} <span onClick={() => setCurrentState('login')} className="text-primary cursor-pointer font-medium">  Login here </span> </p>
        )}
      </form>
    </div>
  );
};

export default Login;
