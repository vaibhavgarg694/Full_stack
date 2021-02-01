const express = require('express');

const model = require('../models/ordermodel');

const router = express.Router();

router.get('/add', (req, res) => {

   model = new model(req.body);
   model.save()
      .then(() => {
         res.status(200).json({ message: 'success' });
      })
      .catch(err => {
         console.error(err);
         res.status(500).json(err);
      })
})

router.get('/getbyuser/:id', (req, res) => {
   model.find({ user: req.params.id }).populate('user').populate('merch')
      .then((data) => {
         console.log("data fetched successfully...!");
         res.status(200).json(data);
      })
      .catch((r) => {
         console.log(r);
         res.status(500).json(r);
      })
})

router.get('/getall', (req, res) => {
   model.find().populate('user').populate('merch')
      .then((data) => {
         console.log("data fetched successfully...!");
         res.status(200).json(data);
      })
      .catch((r) => {
         console.log(r);
         res.status(500).json(r);
      })
})

module.exports = router