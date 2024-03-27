const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  gender: String,
  profession: String,
  shoesize: Number,
  hairColor: String,
  hairLength: Number,
  waist: Number,
  height: Number,
  weight: Number,
  castings: String,
  dob: Date,
  picture: String,
});

module.exports = mongoose.model('Subscription', subscriptionSchema);
