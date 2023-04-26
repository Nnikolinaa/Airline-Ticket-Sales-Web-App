import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/models/response.model';
import { TicketReservation } from 'src/models/ticketreservation.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TicketreservationService {
  private apiUrl = 'http://localhost:3000/api/v1/ticketreservation';
  reservations: any[] = [];


setReservation(reservation: TicketReservation): Observable<ApiResponse> {
  return this.http.post<ApiResponse>(this.apiUrl, reservation);
}
 
getReservations(): Observable<TicketReservation[]> {
  return this.http.get<TicketReservation[]>(this.apiUrl);
}

deleteReservation(id: string): Observable<ApiResponse> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete<ApiResponse>(url);
}

createReservation(reservation: any): Observable<any> {
  return this.http.post(this.apiUrl, reservation);
}


  constructor(private http: HttpClient) { }

  getAllReservations(): Observable<TicketReservation[]> {
    return this.http.get<TicketReservation[]>(this.apiUrl);
  }

  getReservationById(flightoffer_id: string): Observable<TicketReservation> {
    return this.http.get<TicketReservation>(`${this.apiUrl}?flightoffer_id=${flightoffer_id}`);
  }
/*
  createReservation(reservation: TicketReservation): Observable<TicketReservation> {
    return this.http.post<TicketReservation>(this.apiUrl, reservation);
  }*/

  updateReservation(reservation: TicketReservation): Observable<TicketReservation> {
    return this.http.put<TicketReservation>(`${this.apiUrl}/${reservation._id}`, reservation);
  }
/*
  deleteReservation(id: string): Observable<TicketReservation> {
    return this.http.delete<TicketReservation>(`${this.apiUrl}/${id}`);
  }*/

  create(flightoffer_id : string, price: number, departureCity: string, destinationCity: string , departureDate : Date, returnDate: Date){
    return this.http.post<TicketReservation | ApiResponse>(environment.apiUrl + "/ticketreservation/", {
            flightoffer_id: flightoffer_id,
            price: price,
            departureCity: departureCity,
            destinationCity: destinationCity,
            departureDate: departureDate,
            returnDate: returnDate

        }
    );
}
}
