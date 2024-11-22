import React, {  useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllServices = ({url}) => {
  const [services, setServices] = useState([]);

  const fetchAllServices = async () => {
    try {
      const response = await axios.get(`${url}/api/service/allServices`);
      if (response.data.success) {
        setServices(response.data.data);
      } else {
        console.error('Failed to fetch services');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to fetch services.');
    }
  };

  useEffect(() => {
    fetchAllServices();
  }, []);

  return (
    <div className="bg-lightBg min-h-screen p-6 z-0 mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Available Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.length > 0 ? (
            services.map((service, i) => (
              <ServiceCard key={i} service={service} />
            ))
          ) : (
            <p className="text-center col-span-full text-secondaryText">
              No services available at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
