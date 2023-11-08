const Blog = require("../models/blogSchema")
const moment = require('moment')

module.exports.get_individualBlog = async (req, res) => {
    let result = await Blog.find({slug: req.params.slug})
        console.log(result)
            res.render('individualBlog', {data: result, moment: moment, title: 'Individual Blog'});
    }