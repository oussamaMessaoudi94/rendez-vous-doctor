const express = require('express')
const router = express.Router()
const archive = require('../modules/archive')



router.post('/archive', (req, res) => {
    const data = new archive({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        date: req.body.date,
        time: req.body.time,
        etat: req.body.etat,
        note: req.body.note,
        med: req.body.med
    })
    data.save().then(
        res.status(200).json({
            message: 'reussi'
        })
    )
})

router.get('/archive', (req, res) => {
    archive.find().then((allArchive) => {
        res.status(200).json({
            finded: allArchive
        })
    })
})

router.get('/archive/:id', (req, res) => {
    archive.findOne({_id:req.params.id}).then((allArchive) => {
        res.status(200).json({
            findedId: allArchive
        })
    })
}) 

router.put('/archive/:id', (req, res) => {
    archive.updateOne({_id:req.params.id}, req.body).then(() => {
        res.status(200).json({
            message:'update'
        }) 
    })
}) 


module.exports = router
