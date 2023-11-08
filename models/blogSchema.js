const mongoose = require('mongoose')
const slugify = require('slugify');



const blogSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    writeUp: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    blogNumber: {
        type: Number,
        required: true,
        unique: true
    },
    images: {
        type: String
    },
    environment: {
        type: String
    },
    instagramLink: {
        type: String
    },
    slug: {
        type: String,
        required: true,
        unique: true

    }
}, {timestamps: true});

blogSchema.pre('validate', (next) => {
    if(this.blogNumber){
        this.slug = this.blogNumber, {strict: true}
    }
    next();
});

const Blog = new mongoose.model('Blog', blogSchema);



module.exports = Blog 