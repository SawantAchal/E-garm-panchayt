import React from 'react'

const ApplicationStatus = () => {
  return (
    <>
        <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold">Application Status</h4>
            <p className={`font-medium ${'status' === 'Approved' ? 'text-green-500' : 'text-red-500'}`}>{'status'}</p>
        </div>
    </>
  )
}

export default ApplicationStatus