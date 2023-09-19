import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  token!: '';
  loading: boolean = false;
  formRegistration: FormGroup;

  constructor(
    private reg: AuthService,
    private build: FormBuilder,
    private router: Router
  ) {
    this.formRegistration = this.build.group({
      Email: ['', Validators.required, Validators.email],
      Password: new FormControl('', [Validators.required]),
      First_name: ['', [Validators.required]],
      Last_name: new FormControl('', [Validators.required]),
      User_name: new FormControl('', [Validators.required]),
      Phone: new FormControl('', [Validators.required]),
      User_type: new FormControl('', [Validators.required]),
    });
    console.log('form', this.formRegistration);
  }

  onRegisterUser() {
    const userData = this.formRegistration.value;
    this.reg.registerUser(userData).subscribe(
      (response) => {
        console.log(response);
        if (response.message) {
          console.log('res', response);

          this.loading = false;

          this.loading = response.message;
          this.token = response.data.token;
          console.log('token', this.token);
          console.log('suceess', response.message);
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('isAdmin', response.data.user_type);
          localStorage.setItem('first_name', response.data.first_name);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user_id', response.data.user_id);
          localStorage.setItem('phone', response.data.phone);
          localStorage.setItem('last_name', response.data.last_name);

          this.router.navigate(['/']);
        } else {
          alert('user details correct');
        }
        console.log('User registered successfully:', response);
        console.log('userdata', userData);
        alert('user details correct');
      },
      (error) => {
        console.error('Error registering user:', error);
      }
    );
  }
}
