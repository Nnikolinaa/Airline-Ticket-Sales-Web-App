export interface ApiFlightoffer {
    _id: string,
    airline: string,
    departureCity: string,
    destinationCity: string,
    departureDate: Date,
    returnDate: Date,
    price: number
}