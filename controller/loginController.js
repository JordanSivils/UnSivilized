
const User = require('../models/userSchema');
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60
const creatToken = (id) => {
                                // Move to dotENV
    return jwt.sign({ id }, process.env.JWT_WEB_TOKEN, {
        expiresIn: maxAge
    });
}

module.exports.get_adminHome = (req, res) => {
    res.render('adminHome', {title: 'Admin Home'})
};

module.exports.get_loginRoute = (req, res) => {
    res.render('login', {title: 'Login'})
};

module.exports.get_registerRoute = (req, res) => {
    res.render('register')
};

/*module.exports.register_user = async (req, res) => {
    const { userName, pinCode, password } = req.body
    try{
       const user = await User.create({ userName, pinCode, password })
        res.redirect('/login')
    } catch(err){
        res.status(400).send(err);
    }
}*/

module.exports.login_auth = async (req, res) => {
    const { userName, password } = req.body

    try {
        const user = await User.login(userName, password);
        const token = creatToken(user._id);
        res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000})
        res.status(200).json({ user: user._id})
    } catch (error) {
        console.log(error)
    }
};

module.exports.get_logout = (req, res) => {
    res.cookie('jwt', '', {
        maxAge: 1
    });
    res.redirect('/login')
}