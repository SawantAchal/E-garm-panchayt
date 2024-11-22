import express from 'express';
import { addStaff, allStaff, loginStaff, removeStaff } from '../controllers/staffController.js';
import { adminAuth } from '../middleware/adminAuth.js'; 

const staffRouter = express.Router();

staffRouter.post('/add', adminAuth, addStaff);
staffRouter.post('/remove', adminAuth, removeStaff);
staffRouter.get('/allStaff', allStaff);
staffRouter.post('/staffLogin' , loginStaff)

export default staffRouter;