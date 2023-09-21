const Admin = require("../models/adminModel");

// Create a new admin record
const createAdmin = async (req, res) => {
  try {
    const admin = new Admin(req.body);
    await admin.save();
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ error: 'Failed to add admin record' });
  }
};

// Get all admin records
const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    console.error('Error fetching admin records:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { createAdmin, getAllAdmins };
