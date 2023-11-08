const express = require('express');
const router = express.Router()
const soloBlog = require('../controller/individualBlogController')
const path = require('path')


router.get('/blogs/:slug', soloBlog.get_individualBlog)
 
 module.exports = router;