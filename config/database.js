// Create the database
var mongoose = require('mongoose');
// var userSchema = require('../models/user.js');

// convert this into an environment variable
// var DB_URL = process.env.
var DB_URL = 'mongodb://jsong97:1cabbages@ds157522.mlab.com:57522/hoks_tutoring';

mongoose.connect(DB_URL, { useNewUrlParser: true }, function(err){
  if (!err){
    console.log('Connected to mongo');
  } else {
    console.log('Failed to connect to mongo');
  }
});

module.exports = {
  database: DB_URL,
  secret: 'yoursecret'
}
