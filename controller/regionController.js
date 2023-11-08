
const Blog = require('../models/blogSchema');
const moment = require('moment')

module.exports.get_southwest =  async (req, res) => {
         const result = await Blog.find({region: 'Southwest'}).sort({blogNumber: -1});
        res.render('regionalBlogs', {data: result, moment: moment, title: 'Southwest'})
     
};

module.exports.get_midwest =  async (req, res) => {
         const result = await Blog.find({region: 'Midwest'}).sort({blogNumber: -1});
        res.render('regionalBlogs', {data: result, moment: moment, title: 'Midwest'})
     
};

module.exports.get_west =  async (req, res) => {
         const result = await Blog.find({region: 'Western'}).sort({blogNumber: -1});
        res.render('regionalBlogs', {data: result, moment: moment, title: 'Western'})
     
};

module.exports.get_southeast =  async (req, res) => {
         const result = await Blog.find({region: 'Southeast'}).sort({blogNumber: -1});
        res.render('regionalBlogs', {data: result, moment: moment, title: 'Southeast'})
     
};

module.exports.get_northeast =  async (req, res) => {
         const result = await Blog.find({region: 'Northeast'}).sort({blogNumber: -1});
        res.render('regionalBlogs', {data: result, moment: moment, title: 'Northeast'})
     
};

module.exports.get_international =  async (req, res) => {
         const result = await Blog.find({region: 'International'}).sort({blogNumber: -1});
        res.render('regionalBlogs', {data: result, moment: moment, title: 'International'})
     
};