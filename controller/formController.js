const Blog = require('../models/blogSchema')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.urlencoded({extended: true}));

module.exports.get_form = async (req, res) => {
    res.render('form-a', {title: 'Write Blog'})
 };

module.exports.submit_form = async (req, res) => {
    const saveBlog = new Blog();
    saveBlog.title = req.body.title
    saveBlog.location = req.body.location;
    saveBlog.date = req.body.date;
    saveBlog.writeUp = req.body.writeUp;
    saveBlog.region = req.body.region;
    saveBlog.blogNumber = req.body.blogNumber
    saveBlog.slug = req.body.blogNumber
    saveBlog.environment = req.body.environment
    saveBlog.instagramLink = req.body.instagramLink
    //saveBlog.image = req.files.filename;
    if(req.files){
        let path = ''
        req.files.forEach(function(files, index, arr){
            path = path  + '/uploads/' +files.filename + ', '
        })
        path = path.substring(0, path.lastIndexOf(', '))
        saveBlog.images = path
    }
    try{
        
        await saveBlog.save();
        res.redirect('/edit');
    } catch(err){
        res.status(500).send(err);
    }
};




