import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { UiModule } from '../ui/ui.module';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NavbarComponent, LoginComponent],
  imports: [CommonModule, UiModule, MatIconModule, FontAwesomeModule],
  exports: [NavbarComponent, MatIconModule],
  providers: [],
})
export class CoreModule {}
