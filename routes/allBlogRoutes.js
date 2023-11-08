const express = require('express');
const router = express.Router();

const allBlogs = require('../controller/allBlogsController')

router.get('/allblogs', allBlogs.get_allBlogs)

module.exports = router