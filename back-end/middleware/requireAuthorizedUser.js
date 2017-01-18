const passport = require('passport');

module.exports = passport.authenticate('jwt', { failWithError: true, session: false });
