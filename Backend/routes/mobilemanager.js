const express = require('express');

const Model= require('../models/mobilemodel');

const router =express.Router();

//router.get('/add',(req,res) => {

   // console.log('a request in user manager');
   // res.send('response from usermanager');

//});

router.get('/add',(req,res) =>{

    console.log('Post add request');
  
 let user1 ={ram :8,battery:6000,camera:64,andriodversion:'Android 10'}

    new Model(user1).save()
     .then(() =>{

    console.log('Data successfully added');

   res.send('success');
})
 .catch(() =>{

    console.error(err);
    res.send('Failed');
 })
})

module.exports = router