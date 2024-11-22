import bcrypt from 'bcryptjs';
import staffModel from '../models/staffModel.js';
import jwt from 'jsonwebtoken'

// Add new staff member
const addStaff = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if staff member already exists
    const existingStaff = await staffModel.findOne({ email });
    if (existingStaff) {
      return res.status(400).json({ success: false, message: 'Staff already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new staff member
    const staff = new staffModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save staff member to the database
    await staff.save();

    res.json({ success: true, message: 'Staff added successfully' });
  } catch (error) {
    console.error('Error adding staff:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const removeStaff = async(req, res) => {
  try {
    const staff = await staffModel.findById(req.body.id);
    await staffModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: 'staff removed' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

const allStaff = async (req, res) => {
  try {
    const staff = await staffModel.find({});
    res.json({success:true ,data:staff})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

// Staff Login Function
const loginStaff = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email exists in staffModel
    const staff = await staffModel.findOne({ email });
    if (!staff) {
      return res.status(404).json({ success: false, message: 'You are not a staff' });
    }

    // Verify the password
    const isMatch = await bcrypt.compare(password, staff.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate a token
    const token = jwt.sign({ id: staff._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    // Respond with success message and token
    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      staff: { id: staff._id, name: staff.name, email: staff.email },
    });
  } catch (error) {
    console.error('Error during staff login:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

export { addStaff , removeStaff , allStaff , loginStaff};
