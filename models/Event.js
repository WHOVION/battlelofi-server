// require mongoose ODM
const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
  host: String,
  userID: String,
  location: String,
  date: String,
  time: String,
  gameTitle: String,
  details: String,
  rsvp: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Event', EventSchema)