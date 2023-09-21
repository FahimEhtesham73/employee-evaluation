// adminHook.js
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

// Create a custom hook for CRUD operations
const useAdmin = () => {
  // Create
  const createAdmin = async (adminData) => {
    try {
      const admin = new Admin(adminData);
      await admin.save();
      return admin;
    } catch (error) {
      throw new Error('Failed to create admin');
    }
  };

  // Read
  const getAdminById = async (id) => {
    try {
      const admin = await Admin.findById(id);
      return admin;
    } catch (error) {
      throw new Error('Failed to get admin by ID');
    }
  };

  // Update
  const updateAdmin = async (id, adminData) => {
    try {
      const admin = await Admin.findByIdAndUpdate(id, adminData, { new: true });
      return admin;
    } catch (error) {
      throw new Error('Failed to update admin');
    }
  };

  // Delete
  const deleteAdmin = async (id) => {
    try {
      await Admin.findByIdAndRemove(id);
    } catch (error) {
      throw new Error('Failed to delete admin');
    }
  };

  return {
    createAdmin,
    getAdminById,
    updateAdmin,
    deleteAdmin,
  };
};

module.exports = useAdmin;
