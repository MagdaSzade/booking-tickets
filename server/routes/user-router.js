const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const User = require('../models/user-model');

router.post('/register', async (req, res) => {
  let {
    username,
    email,
    password
  } = req.body.user;


  const userExists = await User.findOne({
    email: email
  });
  if (userExists) return res.status(200).send('User with email: ' + userExists.email + ' already exists');


  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {

      const user = new User({
        username: username,
        email: email,
        password: hash
      });

      const saveUser = await user.save();
      res.send('User registered with email: ' + email);
    });
  });

});


router.post('/login', async (req, res) => {

  const user = await User.findOne({
    // TODO: need fix in login form to work
    email: req.body.email
  });
  if (!user) return res.status(400).send("Wrong credentials");

  // TODO: need fix in login form to work
  bcrypt.compare(req.body.password, user.password, function (err, result) {
    if (!result) return res.status(400).send("Wrong credentials");

    const token = jwt.sign({
      _id: user._id
    }, 'yourSecretToken');
    res.header('auth-token', token).send(token);
  });


});


module.exports = router;
