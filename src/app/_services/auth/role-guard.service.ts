import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';
import { TokenStorageService } from './token-storage.service';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(
    public auth: AuthService,
    public router: Router,
    private tokenService: TokenStorageService
  ) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property

    const expectedRoles = route.data['expectedRoles'];
    const token = this.tokenService.getToken();
    if (!token) {
      this.router.navigate(['login']);
      return false;
    }
    // decode the token to get its payload
    const tokenPayload = this.getDecodedAccessToken(token);
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    if (expectedRoles[0] === '*') {
      return true;
    }

    let check = false;
    for (let role of expectedRoles) {
      if (role === tokenPayload.role) {
        check = true;
      }
    }

    if (!check) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

  getDecodedAccessToken(token: string): any {
    try {
      return decode(token);
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
