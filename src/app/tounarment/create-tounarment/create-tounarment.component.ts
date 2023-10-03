import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TournamentService } from 'src/app/core/tournament.service';

@Component({
  selector: 'app-create-tounarment',
  templateUrl: './create-tounarment.component.html',
  styleUrls: ['./create-tounarment.component.scss'],
})
export class CreateTounarmentComponent {
  TournamentModes: string[] = ['MULTIPLAYER', 'SINGLES', 'BATTLE'];
  TournamentType: string[] = ['PUBLIC', 'PRIVATE'];
  Teams: string[] = ['DUO', 'BATTLE'];
  Shuffles: string[] = ['AUTOMATIC', 'MANUEL'];
  Payments: string[] = ['FREE', 'PAID'];
  Links: string[] = ['https://codmobile', ''];
  IsPaid!: boolean;
  loading: boolean = false;
  // currentDate: Date = new Date();

  formTournament: FormGroup;

  constructor(
    private tournament: TournamentService,
    private router: Router,
    private build: FormBuilder
  ) {
    this.formTournament = this.build.group({
      Name: ['', [Validators.required, Validators.nullValidator]],
      GameName: ['', [Validators.required]],
      Icon: ['', [Validators.required]],
      TournamentType: ['', [Validators.required]],
      TournamentMode: ['', [Validators.required]],
      Team: ['', [Validators.required]],
      Shuffle: ['', [Validators.required]],
      Payment: ['', [Validators.required]],
      TournamentSize: ['', [Validators.required]],
      Link: ['', [Validators.required]],
      Date: ['', [Validators.required]],
      // IsPaid: ['', [Validators.required]],
      RefNumber: ['', [Validators.required]],
      PaymentChannel: ['', [Validators.required]],
      Amount: ['', [Validators.required]],
      Note: ['', [Validators.required]],
      // User_id: ['12345'],
    });
  }

  // onFormSubmit() {
  //   console.log();
  // }

  // onFormSubmit() {
  //   const token = localStorage.getItem('token');
  //     const createData = this.formTournament.value;
  //   const dataToSend =  this.formTournament.value
  //   this.tournament.createtounarment(this.formTournament.value, token).subscribe(
  //     (response) => {
  //       console.log('Response:', response);
  //     },
  //     (error) => {
  //       console.error('Error:', error);
  //     }
  //   );
  // }

  onFormSubmit() {
    const token = localStorage.getItem('token');
    const createData = this.formTournament.value;
    console.log('new', createData);
    if (token !== null) {
      this.tournament
        .createtounarment(this.formTournament.value, token)
        .subscribe((data) => {
          console.log('data', data);
          this.router.navigate(['/create-tournament/tournament/id']);
        });
    }
  }
}
