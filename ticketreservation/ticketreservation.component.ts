
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserprofileService } from 'src/services/userprofile.service';
import { TicketreservationService } from 'src/services/ticketreservation.service';
import { TicketReservation } from 'src/models/ticketreservation.model';
@Component({
  selector: 'app-ticketreservation',
  templateUrl: './ticketreservation.component.html',
  styleUrls: ['./ticketreservation.component.css']
})
export class TicketreservationComponent implements OnInit {
  reservations: TicketReservation[] = [];

  constructor(private ticketReservationService: TicketreservationService) { }

  ngOnInit() {
    this.ticketReservationService.getReservations().subscribe((reservations: TicketReservation[]) => {
      this.reservations = reservations;
    });
  }

  removeReservation(index: number, id: string) {
    this.ticketReservationService.deleteReservation(id).subscribe(() => {
      this.reservations.splice(index, 1);
    });

}
saveReservation(reservation: TicketReservation) {
  this.ticketReservationService.createReservation(reservation).subscribe(() => {
    this.reservations.push(reservation);
  });
}

}

