const express = require('express');
const router = express.Router();
const userController = require('../controller/controluser');

router.post('/signup', userController.create);   // Sign Up
router.post('/login', userController.login);     // Login
router.get('/get', userController.findAll);

module.exports = router;