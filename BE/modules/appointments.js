const mongoose = require ('mongoose')


const appointSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    date: String,
    time: String,
    etat: String,
    createdAt: {
        type: Date,
        default: Date.now
      }
})

const appointment = mongoose.model('appointment', appointSchema)
module.exports = appointment