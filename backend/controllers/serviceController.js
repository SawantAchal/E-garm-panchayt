import serviceModel from "../models/serviceModel.js"

const addService = async (req, res) => {
    try {
        const service = new serviceModel({
            name:req.body.name,
            description:req.body.description
        })
        await service.save()
        res.json({ success: true, message: 'service Added' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const allServices = async (req, res) => {
    try {
        const service = await serviceModel.find({});
        res.json({success:true ,data:service})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const removeService = async (req, res) => {
    try {
        const service = await serviceModel.findById(req.body.id);
        await serviceModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: 'service removed' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

const updateService = async (req, res) => {
    try {
        const { serviceId, name, description } = req.body;

        // Validate the serviceId is provided
        if (!serviceId) {
            return res.status(400).json({ success: false, message: 'Service ID is required' });
        }

        // Validate that the fields are not empty
        if (!name || !description) {
            return res.status(400).json({ success: false, message: 'Name and description are required' });
        }

        // Find and update the service by its ID
        const updatedService = await serviceModel.findByIdAndUpdate(
            serviceId,
            { name, description },  // Updated fields
            { new: true, runValidators: true }  // Ensure validation and return updated document
        );

        // Check if the service was found and updated
        if (!updatedService) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        res.json({ success: true, message: 'Service updated successfully', data: updatedService });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export {addService , allServices , removeService,updateService}