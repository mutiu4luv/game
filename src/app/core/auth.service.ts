import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = ' https://gamelyd-test.onrender.com/';

  constructor(private http: HttpClient) {}

  public handleError(errorRsponse: HttpErrorResponse): Observable<never> {
    if (errorRsponse.error instanceof ErrorEvent) {
      console.log('error from frontend', errorRsponse.error);
    } else {
      console.log('error from server', errorRsponse);
    }
    return throwError(() => errorRsponse);
  }

  login(data: any): Observable<void> {
    const headers = {
      headers: new HttpHeaders({
        /* eslint-disable camelcase */
        'Content-type': 'application/json',
      }),
    };
    console.log(data);
    return this.http
      .post<void>(this.apiUrl + 'users/login', data, headers)
      .pipe(catchError(this.handleError));
  }

  registerUser(userData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http
      .post<any>(`${this.apiUrl}users/signup`, userData, httpOptions)
      .pipe(catchError(this.handleError));
  }
}
