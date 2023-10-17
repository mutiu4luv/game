import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TournamentService } from 'src/app/core/tournament.service';

@Component({
  selector: 'app-create-tounarment',
  templateUrl: './create-tounarment.component.html',
  styleUrls: ['./create-tounarment.component.scss'],
})
export class CreateTounarmentComponent implements OnInit {
  TournamentModes: string[] = ['MULTIPLAYER', 'SINGLES', 'BATTLE'];
  TournamentType: string[] = ['PUBLIC', 'PRIVATE'];
  Teams: string[] = ['DUO', 'BATTLE'];
  Shuffles: string[] = ['AUTOMATIC', 'MANUEL'];
  Payments: string[] = ['FREE', 'PAID'];
  Links: string[] = ['https://codmobile', ''];
  IsPaid!: boolean;
  loading: boolean = false;
  Tournament: any;
  // ID!: string;
  // currentDate: Date = new Date();

  formTournament: FormGroup;
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const ID = params['ID'];
      if (ID) {
        this.router.navigate(['/tournament/single-tournament', ID]);
      }
    });
  }

  constructor(
    private tournament: TournamentService,
    private router: Router,
    private build: FormBuilder,
    private route: ActivatedRoute
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
    // this.ID = this.route.snapshot.params['ID'];
    const baseUrl = '/tournament/single-tournament/';

    const token = localStorage.getItem('token');
    const createData = this.formTournament.value;
    console.log('new', createData);
    if (token !== null) {
      this.tournament
        .createtounarment(this.formTournament.value, token)
        .subscribe((data: any) => {
          console.log('data', data);
          console.log(data.data.ID);
          localStorage.setItem('TournamentId', data.tournament.TournamentId);

          // this.router.navigate([
          // '/tournament/single-tournament/' +  data.data.ID,
          // ]);
          this.router.navigate([`${baseUrl}${data.data.ID}`]);
        });
    }

    // else

    // {
    //   alert(' details incorrect');
    // }
    // console.log('form registered successfully:', createData);
    // alert('user details correct');
  }
}
