import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  userId: { type:String,required:true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'service', required: true },
  serviceName: { type: String },
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  // documents: { type: String },
  status: { type: String, default: 'Pending' }, 
}, { timestamps: true });

const applicationModel = mongoose.models.application || mongoose.model('application', applicationSchema);

export default applicationModel;