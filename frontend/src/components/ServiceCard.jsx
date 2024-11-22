import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate('/appliForm', { state: { serviceName: service.name, serviceId: service._id } });
  };

  return (
    <div className="border rounded-lg bg-white shadow-md hover:shadow-lg p-6 transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold text-primary mb-2">{service.name}</h3>
      <p className="text-secondaryText mb-4">{service.description}</p>
      <button onClick={handleApply} className="w-full bg-gradient-to-r from-primary to-secondary text-black py-2 rounded-lg font-bold hover:opacity-90 transition" >
        Apply
      </button>
    </div>
  );
};

export default ServiceCard;
