import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  Email: string = '';
  password: string = '';
  token: string = '';
  loading: boolean = false;
  formLogin: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private build: FormBuilder
  ) {
    this.formLogin = this.build.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
    });
  }

  loginProcess($event: any) {
    $event.preventDefault();
    this.loading = true;

    console.log(this.formLogin.value);
    if (this.formLogin.valid) {
      this.auth.login(this.formLogin.value).subscribe(
        (result: any) => {
          this.loading = false;

          console.log('res', result);
          if (result.message) {
            this.loading = result.message;
            this.token = result.token;
            // console.log('token', result.data.refresh_token);
            console.log('suceess', result.message);
            localStorage.setItem('email', result.data.email);
            localStorage.setItem('isAdmin', result.data.user_type);
            localStorage.setItem('user_name', result.data.user_name);
            localStorage.setItem('token', result.data.token);
            localStorage.setItem('user_id', result.data.user_id);
            localStorage.setItem('username', result.data.user_name);
            this.router.navigate(['/']);
          } else {
            alert('user details correct');
          }
          console.log('User registered successfully:', result);
          alert('user details correct');
        },
        (err: any) => {
          alert('not successful');
          console.error('this is the error', err.error);
        }
      );
    }
  }
}
