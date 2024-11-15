// create user model 
import mongoose from 'mongoose'

// user Schema
const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
},{minimize:false})

// create model in database
const userModel = mongoose.model.user || mongoose.model("user" ,userSchema)
export default userModel;