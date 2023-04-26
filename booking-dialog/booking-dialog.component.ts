import { Component,  OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { TicketreservationService } from 'src/services/ticketreservation.service';

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.css'],
  providers: [

    DatePipe,
    CurrencyPipe,
  ]
})
export class BookingDialogComponent implements OnInit{
  // Initializing component properties with default values
  flightoffer_id: string = '';
  price: number = 0;
  departureCity: string = '';
  destinationCity: string = '';
  departureDate: string = '';
  returnDate: string = '';

  constructor(
    private snackBar: MatSnackBar,

    private route: ActivatedRoute,
    private datePipe: DatePipe,
    private currencyPipe: CurrencyPipe,
    private ticketReservationService: TicketreservationService
  ){}

  ngOnInit() {
    // Retrieving route query parameters and initializing component properties with the corresponding values
    this.route.queryParams.subscribe(params => {
      this.flightoffer_id = params['_id'];
      this.price = params['price'];
      this.departureCity = params['departureCity'];
      this.destinationCity = params['destinationCity'];
      this.departureDate = this.datePipe.transform(params['departureDate'], 'yyyy MMM dd hh:mm a') ?? '';
      this.returnDate =this.datePipe.transform (params['returnDate'], 'yyyy MMM dd hh:mm a') ?? '';
    });
  }

  formatPrice(price: number): string {
    return this.currencyPipe.transform(price, 'EUR', 'symbol', '1.2-2') ?? '';
  }

  bookNow() {

    // Creating a reservation object with necessary details
    const reservation = {
      flightoffer_id: this.flightoffer_id,
      price: this.price,
      departureCity: this.departureCity,
      destinationCity: this.destinationCity,
      departureDate: this.departureDate,
      returnDate: this.returnDate,

    };
    // Calling the ticket reservation service to create a reservation
    this.ticketReservationService.createReservation(reservation).subscribe(
      (response) => {
        // Handle success response
        console.log('Booking initiated!', response);
        this.snackBar.open('You\'ve Successfully booked a flight', 'Close', {
          duration: 5000, // Duration in milliseconds
          verticalPosition: 'top' // Position of the snackbar
        });
      },
      (error) => {
        // Handle error response
        console.error('Error occurred while booking the flight:', error);
        this.snackBar.open('An error occurred while booking the flight. Please try again later.', 'Close', {
          duration: 5000, // Duration in milliseconds
          verticalPosition: 'top' // Position of the snackbar
        });
      }
    );
  
  
}
}
