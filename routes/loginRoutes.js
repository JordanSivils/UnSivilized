const express = require('express');
const router = express.Router();
const login = require('../controller/loginController');
const User = require('../models/userSchema')


router.get('/adminhome', login.get_adminHome);
//router.get('/register', login.get_registerRoute);
//router.post('/register', login.register_user);
router.get('/login', login.get_loginRoute);
router.post('/login', login.login_auth);
router.get('/logout', login.get_logout);

module.exports = router;