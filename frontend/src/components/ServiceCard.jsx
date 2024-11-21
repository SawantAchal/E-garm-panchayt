import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServiceCard = ({ service }) => {

  const navigate = useNavigate()
  const handleApply = () => {
    navigate('/appliForm', { state: { serviceName: service.name ,serviceId: service._id,} })
  }

  return (
    <>
      <div className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg">
        <h3 className="font-semibold">{service.name}</h3>
        <p>{service.description}</p>
        <button onClick={handleApply} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Apply</button>
      </div>
    </>
  )
}

export default ServiceCard