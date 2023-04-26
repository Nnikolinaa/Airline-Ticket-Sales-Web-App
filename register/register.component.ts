import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;

    constructor(private http: HttpClient, private snackBar: MatSnackBar, private router: Router) { }
  
    RegisterUser(): void {
      const newUser = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };
  
      this.http.post('http://localhost:3000/api/v1/userprofile/register', newUser).subscribe(
        (response) => {
          console.log('Registration successful');
          // Add your code for successful registration here
          this.snackBar.open(`Successfully Registered`, 'Dismiss', { duration: 5000 });
          sessionStorage.setItem('registeredUser', JSON.stringify(response));
          this.router.navigateByUrl('/home');
        },
        (error) => {
          console.log('Registration failed');
          // Add your code for failed registration here
        }
      );
    }
}
