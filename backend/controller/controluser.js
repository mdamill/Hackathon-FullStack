const User = require('../model/usermodel');

// Create User (Signup)
const create = async (req, res) => {
  try {
    const result = await User.create(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login User
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find user by email and password
    const user = await User.findOne({ where: { email, password } });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get All Users
const findAll = async (req, res) => {
  try {
    const result = await User.findAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { create, login, findAll };