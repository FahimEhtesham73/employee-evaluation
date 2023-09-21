const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  EmployeeName: {
    type: String,
    required: [true, 'Employee Name is required'],
  },
  progressProject: {
    type: String,
    required: [true, 'Progress Project is required'],
  },
  Recommend: {
    type: Boolean,
    required: [true, 'Recommendation for promotion is required'],
  },
}, { timestamps: true });

// Define the Admin model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
