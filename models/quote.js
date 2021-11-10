const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
  rooms: Array,
  areas: Array,
  jobDescription: String,
  productsRequired: Array,
  cost: Number,
  date: String,
});

module.exports.Quote = mongoose.model('quote', quoteSchema, 'quote');
