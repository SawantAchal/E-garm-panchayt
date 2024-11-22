import mongoose from 'mongoose'

// user Schema
const adminSchema = new mongoose.Schema({
    name:{type:String,required:true ,unique: true,},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role: {type: String,default: 'admin'},
},{minimize:false})

// create model in database
const adminModel = mongoose.model.admin || mongoose.model("admin" ,adminSchema)
export default adminModel;