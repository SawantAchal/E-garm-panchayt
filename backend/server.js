import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoute.js';
import serviceRouter from './routes/serviceRoute.js';
import adminRouter from './routes/adminRoutes.js';
import adminModel from './models/adminModel.js';
import bcrypt from 'bcryptjs';
import staffRouter from './routes/staffRoute.js';
import applicationRouter from './routes/applicationRoutes.js';

//app config
const app = express();
const port = process.env.PORT || 4000;

//middleware 
app.use(express.json());
app.use(cors());

//db connect
connectDB();

// Check and Create Default Admin
const createDefaultAdmin = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
      console.error('Admin credentials are missing in .env file');
      return;
    }

    const existingAdmin = await adminModel.findOne({ email: adminEmail });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      const admin = new adminModel({
        name: 'Default Admin',
        email: adminEmail,
        password: hashedPassword,
      });
      await admin.save();
      console.log('Default admin created successfully!');
    } else {
      console.log('Admin already exists.');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
};

// Call the function on server startup
createDefaultAdmin();

//Routes
app.use('/api/user' , userRouter)
app.use('/api/service' , serviceRouter)
app.use('/api/admin' , adminRouter)
app.use('/api/staff' , staffRouter)
app.use('/api/application' , applicationRouter)

// request the data for server
app.get('/' , (req , res) => {
    res.send("API Working")
});

// to run express server
app.listen(port , () => {
    console.log(`server started on http://localhost:${port}`)
});