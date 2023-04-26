const mongoose = require('mongoose');

// Flight offer model
const flightOfferSchema = new mongoose.Schema({
  airline: {
    type: String,
    required: true,
  },
  departureCity: {
    type: String,
    required: true,
  },
  destinationCity: {
    type: String,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true
  },
  
  availableSeats: {
    type: Number,
    required: true
  },
  numOfStopovers:{
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});
exports.FlightOffer = mongoose.model('FlightOffer', flightOfferSchema);