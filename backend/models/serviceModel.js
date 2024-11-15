import mongoose from 'mongoose'

// user Schema
const sericeSchema = new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
})

// create model in database
const serviceModel = mongoose.model.service || mongoose.model("service" ,sericeSchema)
export default serviceModel;