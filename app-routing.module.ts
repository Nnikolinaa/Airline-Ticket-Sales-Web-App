import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { FlightofferComponent } from './flightoffer/flightoffer.component';
import { TicketreservationComponent } from './ticketreservation/ticketreservation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';
const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "flightoffer", component: FlightofferComponent},
  {path: "ticketreservation", component: TicketreservationComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "booking-dialog", component: BookingDialogComponent},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
