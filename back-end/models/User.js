const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const User = new Schema({})

User.plugin(passportLocalMongoose, {
    usernameField: 'email',
    usernameLowerCase: true
})

module.exports = mongoose.model('User', User)
