const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const users = require('../modules/signup')
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken')

const sekretKey = 'crococoder'

router.post('/signup', async (req, res)=>{
    let user = await users.findOne({email:req.body.email})
    if (user) {
        return res.status(200).json({
            message:'0'
        })
    }

    bcrypt.hash(req.body.pswd, 10).then((bcrypted)=>{
        const userSchema = new users ({
            name: req.body.name,
            email: req.body.email,
            pswd: bcrypted,
            role: 'admin'
        })
        userSchema.save().then((doc, err)=>{
            if (!err) {
                const transporter = nodemailer.createTransport({
                  host: 'sandbox.smtp.mailtrap.io',
                  port: '2525',
                  auth: {
                    user: 'a0988965899e37',
                    pass: 'c459d4973a6a15'
                  }
                });
                const mailOptions = {
                  from: 'vindication@enron.com',
                  to: req.body.email,
                  subject: 'added user', 
                  text: 'added user'
                };
                transporter.sendMail(mailOptions, function (error,
                  info) {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log('Email sent: ' + info.response);
                  }
                });
              }
        
              res.status(200).json({
                message: '1'
              })
        })
    })
})


router.post('/login', async (req, res)=>{
 const {email, password} = req.body
 const user = await users.findOne({email})
 if (!user) {
    return res.status(200).json({
        message : '0'
    })
 }
 const isMatch = await bcrypt.compare(password, user.pswd)
 if (!isMatch) {
    return res.status(200).json({
        message : '1'
    })
 }
 const token = jwt.sign({id: user._id, name: user.name, email: user.email, role: user.role}, sekretKey, { expiresIn: 60 })
 res.status(200).json({
    message: 'login successful', token
 })
})









module.exports = router