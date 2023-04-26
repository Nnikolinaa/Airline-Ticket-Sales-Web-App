import { Component, ViewChild } from '@angular/core';
import { BackendDataService, todo } from './backend-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  showData: boolean;
  data: todo[] = [];
  columnsToDisplay = ['userprofle', 'reservationDate', '_id'];


  constructor (private web: BackendDataService, private router: Router){
    this.showData = false;

    this.web.GetTodos().subscribe( x => {
      this.data = x;
      console.log(this.data);
    })
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('loggedInUser') !== null;
  }

  getLoggedInUserEmail(): string | undefined {
    const userJson = sessionStorage.getItem('loggedInUser');
    if(userJson){
      const user = JSON.parse(userJson);
      return user.email;
    }
    return undefined;
  }
  
  logout(){
    sessionStorage.removeItem('loggedInUser');
    this.router.navigateByUrl('/');
  
    }
}
