import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TournamentService {
  private apiUrl = ' https://gamelyd-test.onrender.com/';
  httpOptions: any = {
    headers: {
      'Content-Type': 'application/json',
      token: localStorage.getItem('token'),
    },
  };

  constructor(private http: HttpClient, private router: Router) {}

  public handleError(errorRsponse: HttpErrorResponse): Observable<never> {
    if (errorRsponse.error instanceof ErrorEvent) {
      console.log('error from frontend', errorRsponse.error);
    } else {
      console.log('error from server', errorRsponse);
    }
    return throwError(() => errorRsponse);
  }

  createtounarment(data: any, token: string): Observable<void> {
    console.log(data);
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
    };
    return this.http
      .post<void>(this.apiUrl + 'tournament/save', data, httpOptions)
      .pipe(catchError(this.handleError));
  }

  // createtounarment(data: any) {
  //   const url = `${this.apiUrl}tournament/save`;
  //   return this.http.post(url, data);
  // }

  getTournamentById(id: any) {
    // const url = `${this.apiUrl}tournament/tournamentID/${id}`;
    // return this.http.get(url);
    console.log(id, 'id');
    return this.http
      .get<void>(`${this.apiUrl}tournament/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError));
  }

  //  “get all participants for a tournament”

  // getAllParticipantsForAtournament(id: any) {
  //   console.log(id, 'idp');
  //   return this.http
  //     .get<void>(
  //       `${this.apiUrl}tournament/participants/${id}`,
  //       this.httpOptions
  //     )
  //     .pipe(catchError(this.handleError));
  // }

  getAllParticipantsForAtournament(id: any) {
    console.log(id, 'idp');

    return this.http
      .get<void>(
        `${this.apiUrl}tournament/participants/${id}`,
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  registertounarment(id: string, data: any, token: string): Observable<void> {
    console.log(data);
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        token: token,
      },
    };
    return this.http
      .post<void>(`${this.apiUrl}tournament/register/${id}`, data, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
