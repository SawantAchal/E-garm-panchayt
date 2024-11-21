import express from 'express';
import authMiddleware from '../middleware/auth.js';
import {  applyForService, getAllApplications } from '../controllers/applicationController.js';

const applicationRouter = express.Router()

applicationRouter.post('/apply' , authMiddleware , applyForService)
applicationRouter.get('/allApplication' , getAllApplications)

export default applicationRouter;