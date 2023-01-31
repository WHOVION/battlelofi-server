// require mongoose ODM
const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  name: String,
  location: String,
  date: String,
  time: String,
  timezone: String,
  gameTitle: String,
  details: String,
  host: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  rsvp: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Event', EventSchema)