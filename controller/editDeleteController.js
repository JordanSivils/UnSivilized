const Blog = require("../models/blogSchema")
const moment = require('moment')

module.exports.get_edit = async (req, res) => {
    let edit = await Blog.find({_id: req.params.id})
        
            res.render('submitEdit-a', {data: edit, moment: moment, title: 'Update Post'});
    };

module.exports.edit_post = async (req, res) => {
      try { 
            let query = {_id: req.params.id};
       let update = {
        location: req.body.location,
        title: req.body.title,
        region: req.body.region,
        date: req.body.date,
        blogNumber: req.body.blogNumber,
        slug: req.body.blogNumber,
        writeUp: req.body.writeUp,
        environment: req.body.environment,
        instagramLink: req.body.instagramLink
      }
      let options = {useFindAndModify: false, new: true}
            await Blog.findOneAndUpdate(query,update, options)
            
            
            console.log(req.body)
            res.redirect('/edit')
            
           } catch (error) {
            console.log(error)
           } 

        };

    module.exports.delete_post = async (req, res) => {
        await Blog.findByIdAndDelete(req.params.id)
        res.redirect('/edit');
    }
    /*module.exports.see_edit = (req, res) => {
        res.render('edit')
    }*/
    module.exports.get_editPage = (req, res) => {
        res.render('edit-a')
    }
    module.exports.display_posts = async (req, res) => {
         let result = await Blog.find().sort({blogNumber: -1})
         res.render('edit-a', {data: result, moment: moment, title: 'Edit'})
     };










/*module.exports = async (req, res, ) => {
    
    try { connectDB();
        await Blog.findByIdAndUpdate(req.params.id, {
             
        location: req.body.location, 
         date: req.body.date,
         region: req.body.region,
         blogNumber: req.body.blogNumber,
         writeUp: req.body.writeUp,
         slug: req.body.blogNumber 
    },{new: true})
      
     
     res.redirect(`/edit/${req.params.id}`) 
          
    } catch (error) {
        console.log(error)
    }
     
}*/
         

   