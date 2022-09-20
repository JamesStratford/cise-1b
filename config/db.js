const mongoose = require('mongoose');
const config = require('config');
require("dotenv").config()
const db = config.get('mongoURI');

console.log(process.env.MONGODB_CONNECTION_STRING)
const dbstr = process.env.MONGODB_CONNECTION_STRING

const connectDB = async () => {
  try {
    await mongoose.connect(
      dbstr,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;