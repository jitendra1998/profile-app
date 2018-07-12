var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  phone: String,
  joining: String,
  position: String,
  image: String
});

module.exports = mongoose.model('Profile', ProfileSchema);
