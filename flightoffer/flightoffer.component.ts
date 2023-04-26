import { Component } from '@angular/core';
import { BackendDataService, todo } from '../../app/backend-data.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ApiFlightoffer } from 'src/models/flightoffer.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginComponent } from '../login/login.component';
import { DatePipe } from '@angular/common';
import { TicketreservationService } from 'src/services/ticketreservation.service';

@Component({
  selector: 'app-flightoffer',
  templateUrl: './flightoffer.component.html',
  styleUrls: ['./flightoffer.component.css'],
  providers: [DatePipe]
})
export class FlightofferComponent {
  showData: boolean;
  data: todo[] = [];
  columnsToDisplay = ['airline', 'departureCity', 'destinationCity', 'departureDate', 'returnDate', 'price', 'availableSeats', 'numOfStopovers', 'reserve'];
  dataSource: any;
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor (private web: BackendDataService, private router: Router, private snackBar: MatSnackBar, private loginComponent: LoginComponent, public datePipe: DatePipe, private ticketReservation: TicketreservationService) {
    this.showData = false;

    this.web.GetTodos().subscribe( x => {
      this.data = x;
      console.log(this.data);
      this.dataSource = new MatTableDataSource<todo>(this.data);
    })
  }


  reserveFlight(flight: ApiFlightoffer){
    console.log('Reserving flight', flight);
    if (!this.loginComponent.isLoggedIn())
      {
        this.snackBar.open('You must log in if you want to reserve a flight', 'OK', {
          duration: 3000
        });
      }  
       else {
    this.router.navigate(['/booking-dialog'],  {
      queryParams: {
        _id: flight._id,
        price: flight.price,
        departureCity: flight.departureCity,
        destinationCity: flight.destinationCity,
        departureDate: flight.departureDate,
        returnDate: flight.returnDate
      }
    });
  }

}
}
