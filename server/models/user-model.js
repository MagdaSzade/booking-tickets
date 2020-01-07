const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  username: {
    type: String,
    required: true,
    minlength: [6, 'Username must be 6 to 15 characters long'],
    maxlength: [15, 'Username must be 6 to 15 characters long']
  },
  email: {
    type: String,
    required: true,
    minlength: [3, 'Your email is too short'],
    maxlength: [200, 'Your email is too long!']
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1000
  },
}, )

module.exports = mongoose.model('users', User);
