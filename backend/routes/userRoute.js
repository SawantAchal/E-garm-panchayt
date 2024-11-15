import express from 'express'
import { getUserProfile, loginUser, registerUser } from '../controllers/userController.js';
import authMiddleware from '../middleware/auth.js';


//create router using express
const userRouter = express.Router()

//created routes for login and register 
userRouter.post("/register" , registerUser);
userRouter.post('/login' , loginUser)
userRouter.get('/profile' ,authMiddleware, getUserProfile)

export default userRouter;