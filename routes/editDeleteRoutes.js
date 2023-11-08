const express = require('express');
const router = express.Router()

const Blog = require('../models/blogSchema');
const edit = require('../controller/editDeleteController')
const { requireAuth } = require('../middleware/authMiddle')
const moment = require('moment')


router.get('/edit/:id', requireAuth,edit.get_edit);
router.put('/:id', requireAuth, edit.edit_post);
router.delete('/:id', requireAuth, edit.delete_post)
router.get('/edit', requireAuth, edit.display_posts)

module.exports = router;
