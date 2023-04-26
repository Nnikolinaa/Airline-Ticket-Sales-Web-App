const mongoose = require('mongoose');

const ticketReservationSchema = new mongoose.Schema({
  flightoffer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FlightOffer',
    required: true,
  },
  departureCity: {
    type: String,
    ref: 'FlightOffer',
    required: true,
  },
  destinationCity: {
    type: String,
    ref: 'FlightOffer',
    required: true,
  },
  departureDate: {
    type: Date,
    ref: 'FlightOffer',
    required: true,
  },
  returnDate: {
    type: Date,
    ref: 'FlightOffer',
    required: true
  },
  price: {
    type: Number,
    ref: 'FlightOffer',
    required: true
  }
  
});
exports.TicketReservation = mongoose.model('TicketReservation', ticketReservationSchema);
