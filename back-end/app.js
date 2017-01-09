if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV == null) {
  require('dotenv').config(); // Load .env
}
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//user authentication 
const passport = require('passport');
const session = require('express-session');

//models
const User = require('./models/User');

//routes
const index = require('./routes/index');
const users = require('./routes/users');
const referral = require('./routes/referral_test')
const referrals = require('./routes/referrals')
const auth = require('./routes/auth');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//for user authentication
app.use(session({ secret: process.env.SESSION_SECRET }));

// Passport + User
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// Express + Passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/', index);
app.use('/users', users);
app.use('/referral_test', referral)
app.use('/referrals', referrals)
app.use('/auth', auth);

// error handler
app.use(function(err, req, res, next) {
  console.error(err)
  const status = err.status || 500
  res.status(status).json({
    status,
    message: err.message
  })


});

module.exports = app;
