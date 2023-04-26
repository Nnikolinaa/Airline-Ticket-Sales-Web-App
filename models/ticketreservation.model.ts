export interface TicketReservation {
    _id: string,
    flightoffer_id: string,
    price: number, // reference the price field from ApiFlightoffer
    departureCity: string, // reference the departureCity field from ApiFlightoffer
    destinationCity: string, // reference the destinationCity field from ApiFlightoffer
    departureDate: Date, // reference the departureDate field from ApiFlightoffer
    returnDate: Date // reference the returnDate field from ApiFlightoffer
  }
  