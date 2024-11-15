import express from 'express';
import { addService, allServices, removeService, updateService } from '../controllers/serviceController.js';

const serviceRouter = express.Router()

serviceRouter.post('/addService' , addService)
serviceRouter.get('/allServices' , allServices)
serviceRouter.post('/removeService' , removeService)
serviceRouter.put('/updateService' , updateService)

export default serviceRouter;