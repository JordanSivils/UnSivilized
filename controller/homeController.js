const Blog = require('../models/blogSchema')
const moment = require('moment')

module.exports = async (req, res) => {
    const result = await Blog.find().sort({blogNumber: -1}).limit(5);
    res.render('home', {data: result, moment: moment, title: 'Home'})
};