const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');
require('dotenv').config();

// Authentication endpoint
router.post('/login', (req, res) => {
  // Authenticate the user

  const { username, password } = req.body;

  // try {
  //   const user = await User.create(req.body);

  //   if (user) {
  //     const role = user.role;
  //     const token = jwt.sign(
  //       { username, role: user.role },
  //       process.env.secretKey
  //     );

  //     res.json({ token, role });
  //   }
  // } catch (e) {
  //   res.status(500).json({ message: 'Internal server error', e });
  // }

  User.findOne({ username, password })
    .then((user) => {
      if (user) {
        // Generate a JWT token
        const token = jwt.sign(
          { username, role: user.role },
          process.env.secretKey
        );

        // Return the token in the response
        res.json({ token });
      } else {
        res.status(401).json({ message: 'Invalid username or password' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;
