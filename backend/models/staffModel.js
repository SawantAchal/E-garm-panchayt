import mongoose from 'mongoose';

// Define staff schema
const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const staffModel = mongoose.model.staff || mongoose.model("staff" ,staffSchema)
export default staffModel;
