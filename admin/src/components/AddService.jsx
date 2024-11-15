import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';

const AddService = ({url}) => {
    const [data , setData] = useState({
        name: '' ,
        description : '' ,
    })

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setData(data => ({...data,[name]:value}))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault(); 
        try {
            const response = await axios.post(`${url}/api/service/addService`,data)
            console.log(response.data.data)
            if (response.data.success) {
                setData({
                    name:'',
                    description:''
                })
                toast.success('Service added successfully!');
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            // res.json({ success: false, message: error.message });
        }

    }
  return (
    <>
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Service</h2>
      <form onSubmit={onSubmitHandler} className="space-y-4">
        <div>
          <label className="block font-medium mb-2">Service Name</label>
          <input type="text" name="name" value={data.name} onChange={onChangeHandler} placeholder="Enter service name" className="w-full p-2 border rounded"/>
        </div>
        <div>
          <label className="block font-medium mb-2">Description</label>
          <textarea name="description" value={data.description} onChange={onChangeHandler} placeholder="Enter service description" className="w-full p-2 border rounded"/>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Service
        </button>
      </form>
    </div>
    </>
  )
}

export default AddService