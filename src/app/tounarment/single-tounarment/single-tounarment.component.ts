import { TournamentService } from 'src/app/core/tournament.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-tounarment',
  templateUrl: './single-tounarment.component.html',
  styleUrls: ['./single-tounarment.component.scss'],
})
export class SingleTounarmentComponent implements OnInit {
  id!: string;
  singleDatas!: any;
  allParticipants: any;
  players!: any[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private singleTournament: TournamentService
  ) {}

  navigateToDetails(id: number) {
    this.id = this.route.snapshot.params['id'];

    // Use the Router service to navigate to the target route with the parameter
    this.router.navigate(['/details', id]);
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      if (id) {
        console.log(id);
        // this.router.navigate(['/tournament/single-tournament', id]);
        this.getTounarmentId(id);
        this.getAllParticipants(id);
      }
    });
  }

  getTounarmentId(id: any) {
    const token: any = localStorage.getItem('token');

    this.singleTournament.getTournamentById(id).subscribe((response: any) => {
      console.log(response, 'res');

      console.log(response.tournament.Team, 'res');
      this.singleDatas = response;

      // try {
      //   const parsedResponse = JSON.parse(response);
      //   this.singleDatas = parsedResponse;
      //   console.log(this.singleDatas.tournament.Team, 'res');
      // } catch (error) {
      //   console.error('Failed to parse the response as JSON:', error);
      // }
    });
  }

  getAllParticipants(id: any) {
    const token: any = localStorage.getItem('token');

    this.singleTournament
      .getAllParticipantsForAtournament(id)
      .subscribe((res: any) => {
        console.log(res, 'resp');

        this.allParticipants = res;
      });
  }
}
