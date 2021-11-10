const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  rooms: Array,
  areas: Array,
  jobDescription: String,
  productsRequired: Array,
  cost: Number,
  date: String,
});

module.exports.Event = mongoose.model("event", eventSchema, "event");
