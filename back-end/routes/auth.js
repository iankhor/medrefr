const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const requireAuthorizedUser = require('../middleware/requireAuthorizedUser');

const router = express.Router();

function whitelistUser({ email }) {
    return { email };
}

function makeTokenForUser(user) {
    return jwt.sign({
        user: whitelistUser(user)
    }, process.env.TOKEN_SECRET, {
        subject: user._id.toString(),
        expiresIn: '5 days'
    });
}

// Sign in
router.post('/signin',
    passport.authenticate('local', { failWithError: true }),
    function(req, res) {
        const token = makeTokenForUser(req.user)
        res.json({ token });
    }
);

// Get current user’s info
router.get('/',
    requireAuthorizedUser,
    function(req, res) {
        const { user } = req;
        if (user) {
            res.json(whitelistUser(user));
        }
        else {
            res.status(401).json({ message: 'Please sign in' });
        }
    }
);

// Sign up
router.post('/register', function(req, res, next) {
  const { email, password } = req.body;
  User.register(
      new User({ email: email }),
      password,
      (error, user) => {
          if (error) {
              next(error);
          }
          else {
              const token = makeTokenForUser(user)
              res.json({ token });
          }
      }
  );
});

module.exports = router;
