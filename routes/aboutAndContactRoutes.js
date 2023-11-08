const express = require('express');
const router = express.Router();
const getAboutAndContact = require('../controller/aboutAndContactController');

router.get('/contact', getAboutAndContact.get_contact);
router.get('/about', getAboutAndContact.get_about);

module.exports = router