
import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    applicationCart: [
        {
            serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'service' },
            serviceName: { type: String },
            fullName: { type: String },
            address: { type: String },
            phoneNumber: { type: String },
            // documents: { type: String },
            status: { type: String, default: 'Pending' },
            date: { type: Date, default: Date.now },
        }
    ],
}, { minimize: false , timestamps:true });

const userModel = mongoose.model.user || mongoose.model("user", userSchema);
export default userModel;
