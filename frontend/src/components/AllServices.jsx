import React from 'react'
import ServiceCard from './ServiceCard';

const AllServices = () => {
    const services = [
        { id: 1, name: 'Apply for Water Supply', description: 'Get water supply connection.' },
        { id: 2, name: 'Road Construction', description: 'Apply for road construction in your area.' },
        { id: 3, name: 'Road Construction', description: 'Apply for road construction in your area.' },
        { id: 4, name: 'Road Construction', description: 'Apply for road construction in your area.' },
        { id: 5, name: 'Road Construction', description: 'Apply for road construction in your area.' }
      ];
  return (
    <>
        <div>
            <div className="p-6 w-full">
                <h2 className="text-2xl font-bold mb-4">Available Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))
                    }
                </div>

            </div>
        </div>
    </>
  )
}

export default AllServices