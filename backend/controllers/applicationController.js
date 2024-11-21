import userModel from '../models/userModel.js';
import applicationModel from '../models/applicationModel.js';
import serviceModel from '../models/serviceModel.js';

// Apply for a service
 const applyForService = async (req, res) => {

    const { userId, serviceId, fullName, address, phoneNumber  } = req.body;
    try {
        // Fetch the service details
        const service = await serviceModel.findById(serviceId);
        // console.log('Service Details:', service);
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        // Create a new application in the applicationModel
        const newApplication = new applicationModel({
            userId,
            serviceId,
            fullName,
            address,
            phoneNumber,
            serviceName: service.name,
            // documents,
            date: Date.now(),
        });

        await newApplication.save();

        // Add the service application to the user's applicationCart
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            {
                $push: {
                    applicationCart: {
                        serviceId,
                        serviceName: service.name,
                        fullName,
                        address,
                        phoneNumber,
                        // documents,
                        date: Date.now(),
                    }
                }
            },
            { new: true }
        ).populate('applicationCart.serviceId');

        res.status(200).json({ success: true, message: 'Service applied successfully', applicationCart: updatedUser.applicationCart,});
    } catch (error) {
        console.error('Error applying for service:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};


// View all applications ( Admin functionality)
 const getAllApplications = async (req, res) => {
    try {
        const applications = await applicationModel.find().populate('serviceId').populate('userId');
        res.status(200).json({ success: true, data: applications });
    } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export {getAllApplications ,applyForService}

