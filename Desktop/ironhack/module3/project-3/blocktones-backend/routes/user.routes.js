const router = require("express").Router();

// const mongoose = require('mongoose');

const User = require('../models/User.model');


//  POST /api/post  -  Creates a new post
router.post('/user', (req, res, next) => {
  const { email, password } = req.body;
  const newUser = {
    email,
    password
  };

  User.create(newUser)

    .then(response=> res.json(response))
    .catch(err =>
      {console.log("error creating a new user...", err);
       res.status(500).json({
        message: "error creating user",
        error: err
    })});
});

module.exports = router;