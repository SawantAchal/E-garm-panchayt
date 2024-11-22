import express from 'express';
import authMiddleware from '../middleware/auth.js';
import {  applyForService, getAllApplications, updateStatus } from '../controllers/applicationController.js';
import { adminAuth } from '../middleware/adminAuth.js';

const applicationRouter = express.Router()

applicationRouter.post('/apply' , authMiddleware , applyForService)
applicationRouter.get('/allApplication' , getAllApplications)
applicationRouter.post('/applicationStatus' , updateStatus)

export default applicationRouter;