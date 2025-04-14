const mongoose = require('mongoose')


const schemaArchive = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    date: String,
    time: String,
    etat: String,
    note: String,
    med : String
})

const archive = mongoose.model('archive', schemaArchive)

module.exports = archive