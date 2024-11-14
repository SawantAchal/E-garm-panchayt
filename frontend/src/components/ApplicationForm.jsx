import React from 'react'

const ApplicationForm = () => {
  return (
    <>
        <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Apply for {''}</h2>
            <form>
                <div className="mb-4">
                    <label className="block font-medium">Full Name</label>
                    <input type="text" name="fullName"  className="w-full p-2 border rounded" required/>
                </div>
                <div className="mb-4">
                    <label className="block font-medium">Address</label>
                    <input type="text" name="address" className="w-full p-2 border rounded" required/>
                </div>
                <div className="mb-4">
                    <label className="block font-medium">Phone Number</label>
                    <input type="text" name="phoneNumber" className="w-full p-2 border rounded" required/>
                </div>
                <div className="mb-4">
                    <label className="block font-medium">Upload Documents</label>
                    <input type="file" name="documents"  className="w-full p-2 border rounded"/>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Submit Application
                </button>
            </form>
        </div>
    </>
  )
}

export default ApplicationForm