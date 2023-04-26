import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  email!: string;
  password!: string;
 

  constructor(private http: HttpClient,  private snackBar: MatSnackBar, private router: Router) {}
  ngOnInit(): void {}


  LoginUser(){
    this.http.get('http://localhost:3000/api/v1/userprofile').subscribe((response: any) => {
      const user = response.find((u: any) => u.email === this.email && u.password === this.password);
      if(user){
        console.log("Welcome");
        // Add your code for successful login here
        this.snackBar.open(`Successfully logged in as ${user.email}`, 'Dismiss', { duration: 5000 });
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        this.router.navigateByUrl('/home');

      }
      else{
        console.log("Invalid login credentials");
        // Add your code for failed login here
        this.snackBar.open('Invalid login credentials', 'Dismiss', { duration: 5000 });
      }
    });
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
