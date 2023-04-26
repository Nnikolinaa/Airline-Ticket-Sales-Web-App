import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { FlightofferComponent } from './flightoffer/flightoffer.component';
import { UserprofileService } from 'src/services/userprofile.service';

import { MatCardModule } from '@angular/material/card';

import { LoginComponent } from './login/login.component';
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { TicketreservationComponent } from './ticketreservation/ticketreservation.component';
import { RegisterComponent } from './register/register.component';
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';
import { FlightofferService } from 'src/services/flightoffer.service';


import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    FlightofferComponent,
    LoginComponent,
    TicketreservationComponent,
    RegisterComponent,
    BookingDialogComponent,
     HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatSnackBarModule,
    MatIconModule, 
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule
  ],
  providers: [UserprofileService, FlightofferService, UserprofileService, LoginComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
