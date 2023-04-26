import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiFlightoffer } from 'src/models/flightoffer.model';
import { ApiResponse } from 'src/models/response.model';


@Injectable()
export class FlightofferService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<ApiFlightoffer[] | ApiResponse>(environment.apiUrl + "/flightoffer/all");
  }

  
  getByID(id: string) {
    return this.http.get<ApiFlightoffer | ApiResponse>(environment.apiUrl + "/flightoffer/?id=" + id);
}

create(data : FormData){
    return this.http.post<ApiFlightoffer | ApiResponse>(environment.apiUrl + "/flightoffer/", data);
}

update(id : string, data : FormData){
    return this.http.put<ApiFlightoffer | ApiResponse>(environment.apiUrl + "/flightoffer/?id="+id, data);
}

delete(id : string){
    return this.http.delete<ApiFlightoffer | ApiResponse>(environment.apiUrl + "/flightoffer/?id=" + id);
}

}
