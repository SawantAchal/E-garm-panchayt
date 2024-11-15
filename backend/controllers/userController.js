import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'
import validator from 'validator'
import userModel from '../models/userModel.js';

const createToken = (id) =>{
    return jwt.sign({id} ,process.env.JWT_SECRET)
}

//login
const loginUser = async(req, res) => {
    const {email , password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({success:false ,message:'user does not exists'})
        }
        const isMatch = await bcrypt.compare(password ,user.password)
        if (!isMatch) {
            return res.json({success:false ,message:'Invalid credentials'})
        }
        const token = createToken(user._id);
        res.json({success:true,token })
    } catch (error) {
        console.log(error)
        res.json({success:false , message:error.message})
    }
}

//register user
const registerUser = async(req, res) => {
    const {name , password  , email} = req.body;
    try {
        //check user is already exists or not
        const exists = await userModel.findOne({email})
        if (exists) {
            return res.json({success:false ,message:'user already exists'})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false ,message:'Please enter valid email'})
        }
        // Password validation
        const passwordRequirements = {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        };
        if (!validator.isStrongPassword(password, passwordRequirements)) {
            return res.json({success:false ,message:'Password must be at least 8 characters long and include uppercase, lowercase, numbers, and symbols.'})
        }
        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password , salt)
        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword,
        })
        //save new user
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true , token})
    } catch (error) {
        console.log(error)
        res.json({success:false , message :error.message})
    }
}

// information of particular user
const getUserProfile = async (req, res) => {
    console.log('logg')
    const { userId } = req.body; 
    try {
        const user = await userModel.findOne({ _id: userId });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: error.message });
    }
};

export {loginUser , registerUser , getUserProfile}