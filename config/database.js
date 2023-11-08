const dotenv = require('dotenv')
const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_CONNECTION_STRING;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, 
      {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error(error.message);
    
  }
}

module.exports = connectDB;