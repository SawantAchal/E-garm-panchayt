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

export {addService , allServices , removeService}