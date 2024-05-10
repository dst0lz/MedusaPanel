import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/_services/notifier.service';
import { AuthService } from '../../_services/auth/auth.service';
import { TokenStorageService } from '../../_services/auth/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router,
    private notifierService: NotifierService
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.tokenStorage.signOut();
      this.isLoggedIn = false;
    }
  }

  onSubmit(data: string[]): void {
    this.authService.login(data[0], data[1]).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.user);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.router.navigate(['']);
      },
      (err) => {
        this.errorMessage = err.error.title;
        this.notifierService.showNotification(this.errorMessage);
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
