import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { NotifierService } from 'src/app/_services/notifier.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  username: string = 'accessError';
  role: string = 'not found';
  color: string = '#FF5555';

  @Input()
  showSelect: boolean = false;

  constructor(
    private tokenService: TokenStorageService,
    private router: Router,
    private notifierService: NotifierService,
    libary: FaIconLibrary
  ) {
    libary.addIconPacks(fas);
  }

  ngOnInit(): void {
    this.username = this.tokenService.getUser().username;
    this.role = this.tokenService.getUser().role.realName;
    this.color = this.tokenService.getUser().role.color;
  }

  clickUser(): void {
    this.showSelect = !this.showSelect;
  }

  logout(): void {
    this.tokenService.signOut();
    this.router.navigate(['login']);
    this.notifierService.showNotification('Du hast dich augeloggt!');
  }

  clickStatistics(): void {
    this.router.navigate(['statistics']);
  }
}
