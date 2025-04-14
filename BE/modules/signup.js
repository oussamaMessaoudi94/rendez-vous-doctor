const mongoose = require('mongoose')


const signupShcema = mongoose.Schema({
    name : String,
    email : {type:String, unique:true},
    pswd : String,
    role : String
})

const users = mongoose.model('users', signupShcema)

module.exports = users