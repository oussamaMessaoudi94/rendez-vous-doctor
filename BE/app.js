const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

mongoose.connect('mongodb://127.0.0.1:27017/rendezvous')

const app = express()
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  app.use(cors(corsOptions))
  
  
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  
  // parse application/json 
  app.use(bodyParser.json())



let appointmentRouter = require('./routes/appointment')
let authRouter = require('./routes/auth')
let archiveRouter = require('./routes/archives')


app.use('/', appointmentRouter)
app.use('/', authRouter)
app.use('/', archiveRouter)

module.exports = app