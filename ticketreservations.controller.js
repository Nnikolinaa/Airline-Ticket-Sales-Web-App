const {TicketReservation} = require('../models/ticketreservation')
const express = require ('express');
const router = express.Router();

const { FlightOffer } = require('../models/flightoffer')
const { UserProfile }= require('../models/userprofile')

// GET all reservations
router.get('/ticketreservation', async ( req,res) => {
  const reservationList = await TicketReservation.find();

  if(!reservationList){
    res.status(500).json({success:false})
  }

  res.status(200).send(reservationList);
});


// GET a single reservation by id
router.get('/ticketreservation/:id', async (req, res) => {
  try {
  const getReservation = await TicketReservation.findById(req.params._id);

  if (!getReservation) {
    return res.status(404).json({ success: false, message: 'Reservation not found' });
  }
  
  res.status(200).json({ success: true, reservation: getReservation });
} catch (err) {
  console.error(err.message);
  res.status(500).json({ success: false, message: 'Server error' });
}
});

// CREATE a new reservation
router.post('/ticketreservation', async (req, res) => {
  let reservation = new TicketReservation({
    flightoffer_id: req.body.flightoffer_id,
    departureCity: req.body.departureCity,
    destinationCity: req.body.destinationCity,
    departureDate: req.body.departureDate,
    returnDate: req.body.returnDate,
    price: req.body.price
  });
  
  reservation = await reservation.save();

  if(!reservation)
  return res.status(404).send('Err: cannot be created.')

  res.send(reservation);
});
// UPDATE a reservation by id
router.put('/ticketreservation/:id', async (req, res) => {
  let reservation = await TicketReservation.findByIdAndUpdate(
    req.params.id, {
      flightoffer_id: req.body.flightoffer_id,
      departureCity: req.body.departureCity,
      destinationCity: req.body.destinationCity,
      departureDate: req.body.departureCity,
      returnDate: req.body.returnDate
    }, {
      new: true
    })
  if(!reservation)
    return res.status(404). send('Err: cannot be created')

  res.send(reservation)
})

     //delete ticket reservation

     router.delete('/ticketreservation/:id', async (req, res) => {
      TicketReservation.findByIdAndRemove(req.params.id).then(reservation => {
        if(reservation){
          return res.status(200).json({
            success: true,
            message: 'Reservation is deleted'
          })
        }else{
          return res.status(404).json({
            success: false,
            message: 'Reservation not found'
          })
        }
      }).catch(err => {
        return res.status(400).json({
          success: false,
          error: err
        })
      })
    })
module.exports = router;