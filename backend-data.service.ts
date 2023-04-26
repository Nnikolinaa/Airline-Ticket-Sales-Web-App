import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface todo{
  _id?: number,
  airline?: string,
  departureCity?: string,
  destinationCity?: string,
  departureDate?: number,
  returnDate?: number,
  price?: number,
  availableSeats?: number,
  numOfStepovers?: number
}

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {

  apiUrl = 'http://localhost:3000/api/v1/flightoffer';

  constructor(private http: HttpClient) { }

  GetTodos(): Observable<todo[]>{
    return this.http.get<todo[]>(this.apiUrl);
  }

  getData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/v1/ticketreservation');
  }
}
