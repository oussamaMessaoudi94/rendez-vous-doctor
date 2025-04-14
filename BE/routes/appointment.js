const express = require('express')
const router = express.Router()
const appointment = require('../modules/appointments')
const nodemailer = require('nodemailer');





router.post('/appointment', (req, res) => {
    const Data = new appointment({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        date: req.body.date,
        time: req.body.time,
        etat: 'En Attente'
    })
    Data.save().then((doc, err) => {
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
                text: 'votre rendez vous est en cours de traitement'
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

router.get('/appointment', (req, res) => {
    appointment.find().then((appoint)=>{
        res.status(200).json({
            appoints: appoint
        })
    })
})

router.get('/appointment/:id', (req, res) => {
    appointment.findOne({_id:req.params.id}).then((appoint)=>{
        res.status(200).json({
            appoints: appoint
        })
    })
}) 

router.delete('/appointment/:id', (req, res) => {
    appointment.deleteOne({_id:req.params.id}).then(()=>{
        res.status(200).json({
            message: 'deleted'
        })
    })
})

router.put('/appointment/:id', (req, res) => {
    appointment.updateOne({_id:req.params.id}, req.body).then(()=>{
        res.status(200).json({
            message: 'update'
        })
    })
})

router.post("/send-email", async (req, res) => {
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
        subject: req.body.etat,
        text: req.body.message,
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

  );







module.exports = router