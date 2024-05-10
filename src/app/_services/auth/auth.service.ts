import { Injectable } from '@angular/core';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'https://api.thelair.eu/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private tokenService: TokenStorageService
  ) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  isAuthenticated(): boolean {
    const token = this.tokenService.getToken();
    if (!token) {
      return false;
    }
    if (token == null) {
      return false;
    }
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token, 0);
  }
}
