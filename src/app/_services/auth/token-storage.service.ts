import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor(private cookieService: CookieService) {}

  signOut(): void {
    this.cookieService.deleteAll();
  }

  public saveToken(token: string): void {
    if (this.cookieService.check(TOKEN_KEY)) {
      this.cookieService.delete(TOKEN_KEY);
    }
    this.cookieService.set(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return this.cookieService.get(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    if (this.cookieService.check(USER_KEY)) {
      this.cookieService.delete(USER_KEY);
    }
    let escapedUser = JSON.stringify(user);
    this.cookieService.set(USER_KEY, escapedUser);
  }

  public getUser(): any {
    const user = this.cookieService.get(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
