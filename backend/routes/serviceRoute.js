import express from 'express';
import { addService, allServices, removeService } from '../controllers/serviceController.js';

const serviceRouter = express.Router()

serviceRouter.post('/addService' , addService)
serviceRouter.get('/allServices' , allServices)
serviceRouter.post('/removeService' , removeService)

export default serviceRouter;