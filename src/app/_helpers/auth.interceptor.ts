import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { TokenStorageService } from '../_services/auth/token-storage.service';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth/auth.service';
import { Router } from '@angular/router';
import { NotifierService } from '../_services/notifier.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private token: TokenStorageService,
    private auth: AuthService,
    private router: Router,
    private notifierService: NotifierService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      if (this.auth.isAuthenticated()) {
        authReq = req.clone({
          headers: req.headers.set(TOKEN_HEADER_KEY, token),
        });
      } else {
        this.token.signOut();
        this.router.navigate(['login']);
        this.notifierService.showNotification('Du wurdest ausgeloggt');
      }
    } else {
      this.token.signOut();
      this.router.navigate(['login']);
    }
    return next.handle(authReq);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
