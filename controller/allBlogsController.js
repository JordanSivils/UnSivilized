const Blog = require('../models/blogSchema');
const moment = require('moment')

module.exports.get_allBlogs = async (req, res) => {
        let result = await Blog.find().sort({blogNumber: -1})
        res.render('allBlogs', {data: result, moment: moment, title: 'All Blogs'})
}