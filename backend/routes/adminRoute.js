const express = require("express");
const router = express.Router();

// Import the Admin model and any other necessary dependencies
const Admin = require("../models/adminModel");

// Define a route to render the admin dashboard
router.get('/admin/dashboard', async (req, res) => {
  try {
    // Fetch admin data from the database (you can customize this query as needed)
    const admins = await Admin.find({ Recommend: true });

    // Render the admin dashboard view and pass the data to it
    res.render('admin/dashboard', { admins });
  } catch (error) {
    console.error('Error fetching admin data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
