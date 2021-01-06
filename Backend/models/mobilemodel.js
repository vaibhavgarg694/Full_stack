const mongoose = require('../connection')

const Schema =new mongoose.Schema({
  ram:Number,
  battery:Number,
  camera:Number,
  andriodversion : String
})

const model= mongoose.model('mobiles',Schema);


module.exports = model;