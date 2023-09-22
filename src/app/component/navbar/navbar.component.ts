import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router, private logoutService: AuthService) {}

  navbarOpen = false;
  token = localStorage.getItem('token');
  // const token = localStorage.getItem('myDataKey');

  // if (token) {
  //   console.log('Data from local storage:', token);
  // } else {
  //   console.log('Item not found in local storage');
  // }

  toggleNavbar(): void {
    this.navbarOpen = !this.navbarOpen;
  }

  logout() {
    this.logoutService.logout();

    if (this.token) {
      localStorage.removeItem('email');
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('first_name');
      localStorage.removeItem('token');
      localStorage.removeItem('user_id');
      localStorage.removeItem('phone');
      localStorage.removeItem('	username');
      localStorage.removeItem('last_name');
      localStorage.removeItem('username');
      localStorage.removeItem('user_name');

      this.router.navigate(['/auth/login']);
    }
  }
}
