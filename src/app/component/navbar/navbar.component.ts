import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth.service';
import { TournamentService } from 'src/app/core/tournament.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  formTournament!: FormGroup;
  id: any;

  constructor(
    private router: Router,
    private logoutService: AuthService,
    private tounarment: TournamentService
  ) {}
  ngOnInit() {}
  navbarOpen = false;
  token = localStorage.getItem('token');

  isDropdownVisible: any = {};

  showDropdown(key: string) {
    this.isDropdownVisible[key] = true;
  }

  hideDropdown(key: string) {
    this.isDropdownVisible[key] = false;
  }
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

  creatTounarment() {
    // this.ID = this.route.snapshot.params['ID'];
    const baseUrl = '/tournament/single-tournament/';
    const id: any = localStorage.getItem('TournamentId');
    const token = localStorage.getItem('token');
    const createData = this.formTournament.value;
    console.log('new', createData);
    if (token !== null) {
      this.tounarment
        .registertounarment(id, this.formTournament.value, token)
        .subscribe((data: any) => {
          console.log('data', data);
          console.log(data.data.ID);
          // this.router.navigate([
          // '/tournament/single-tournament/' +  data.data.ID,
          // ]);
          this.router.navigate([`${baseUrl}${data.data.ID}`]);
        });
    }
  }
}
