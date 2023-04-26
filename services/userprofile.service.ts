import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiUser } from 'src/models/userprofile.model';
import { ApiResponse } from 'src/models/response.model';

@Injectable()
export class UserprofileService {
  loggedInUser?: ApiUser; 

  constructor(private http: HttpClient){
    let id = localStorage.getItem("userID");
    if(id != null){
      this.getById(id).subscribe(data => {
        if("_id" in data){
          this.loggedInUser = data;
        }
      });
    }
  }

  getById(id: string){
    return this.http.get<ApiUser | ApiResponse>(environment.apiUrl + "/userprofile/?id=" + id)
  }

  getAll(){
    return this.http.get<ApiUser[] | ApiResponse>(environment.apiUrl + "/userprofile/all");
  }

  register(firstName: string, lastName: string, email: string, password: string) {
    return this.http.post<ApiUser | ApiResponse>(environment.apiUrl + "/userprofile/", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    });
}

update(id: string, firstName: string, lastName: string, email: string, password: string) {
  return this.http.put<ApiUser | ApiResponse>(environment.apiUrl + "/userprofile/?id=" + id, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
  });
}


delete(id: string){
  return this.http.delete<ApiUser | ApiResponse>(environment.apiUrl + "/userprofile/?id=" + id);
}

login(email: string, password: string) {
  return this.http.post<ApiUser | ApiResponse>(environment.apiUrl + "/userprofile/login", {
      email: email,
      password: password
  });
}


saveLoginCredentials(cred: ApiUser) {
  this.loggedInUser = cred;
  localStorage.setItem("userID", cred._id);
}

logout() {
  this.loggedInUser = undefined;
  localStorage.removeItem("userID");
}

}