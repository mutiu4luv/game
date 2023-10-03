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
}
