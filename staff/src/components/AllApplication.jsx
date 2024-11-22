import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const AllApplication = ({url}) => {
    const [application , setApplication] = useState([])
    const fetchAllApplication = async () => {
        try {
            const res = await axios.get(`${url}/api/application/allApplication`)
            console.log(res.data)
            if (res.data.success) {
                setApplication(res.data.data)
            }else{
                toast.error('Error fetching applications')
            }
        } catch (error) {
            console.error(error.message);
            toast.error('An error occurred while fetching application .');
        }
    }

    const statusHandler = async (e , applicationId) => {
        try {
            const response = await axios.post(url + '/api/application/applicationStatus', {
                applicationId,
                status: e.target.value
            });
            if (response.data.success) {
                await fetchAllApplication();
            } else {
                toast.error("Error updating application status");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        fetchAllApplication()
    },[])

  return (
    <>
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">All Applications</h1>
            <div className="space-y-6">
                {
                    application.map((app , index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <p className="text-lg font-semibold text-gray-800">{app.fullName}</p>
                                    <p className="text-sm text-gray-600">Service: {app.serviceName}</p>
                                    <p className="text-sm text-gray-600">Applied: {new Date(app.createdAt).toLocaleDateString()}</p>
                                </div>
                                <div className="text-sm text-gray-600">
                                    <p>Phone: {app.phoneNumber}</p>
                                    <p>Address: {app.address}</p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <select onChange={(e) => statusHandler(e, app._id)} value={app.status} className="bg-gray-100 border border-gray-300 p-2 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none">
                                    <option value="pending">Pending</option>
                                    <option value="rejected">Rejected</option>
                                    <option value="approved">Approved</option>
                                </select>
                            </div>
                            <hr className="my-4" />
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default AllApplication