const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    name: String,
    location: String,
    description: String,
    date: Date
})

module.exports.Event = mongoose.model('event',eventSchema,'event')
