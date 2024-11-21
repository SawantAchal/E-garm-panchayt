import React, { useContext, useEffect, useState } from 'react'
import ServiceCard from './ServiceCard';
import { StoreContext } from '../context/storeContext'
import axios from 'axios'
import { toast } from 'react-toastify';

const AllServices = () => {
    const {url} = useContext(StoreContext)
    const [services , setServices] = useState([])

    const fetchAllServices = async () => {
        try {
            const response = await axios.get(url+'/api/service/allServices')
            // console.log(response.data.data)
            if (response.data.success) {
                setServices(response.data.data)
            } else {
                console.error("Failed to fetch services");
            }
        } catch (error) {
            console.log(error);
            toast.error({ success: false, message: error.message });
        }
    }

    useEffect(() => {
        fetchAllServices()
    },[])

  return (
    <>
        <div>
            <div className="p-6 w-full">
                <h2 className="text-2xl font-bold mb-4">Available Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        services.map((service , i) => (
                            <ServiceCard key={i} service={service} />
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default AllServices