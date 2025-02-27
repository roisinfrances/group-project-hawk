const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
  rooms: Array,
  areas: Array,
  jobDescription: String,
  productsRequired: Array,
  cost: Number,
  date: Date,
  started: Date,
  completed: Date
});

module.exports.Quote = mongoose.model('quote', quoteSchema, 'quote');
