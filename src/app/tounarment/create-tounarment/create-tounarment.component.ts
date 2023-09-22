import { Component } from '@angular/core';

@Component({
  selector: 'app-create-tounarment',
  templateUrl: './create-tounarment.component.html',
  styleUrls: ['./create-tounarment.component.scss'],
})
export class CreateTounarmentComponent {
  countries = ['USA', 'Canada', 'UK', 'Australia'];
  cities = {
    USA: ['New York', 'Los Angeles', 'Chicago'],
    Canada: ['Toronto', 'Vancouver', 'Montreal'],
    UK: ['London', 'Manchester', 'Birmingham'],
    Australia: ['Sydney', 'Melbourne', 'Brisbane'],
  };

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'gender',
    'dob',
    'education',
    'company',
    'experience',
    'package',
    'action',
  ];
}
