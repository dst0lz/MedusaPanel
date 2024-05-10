import { HttpClientModule } from '@angular/common/http';
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  Inject,
  Injector,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { JwtModule } from '@auth0/angular-jwt';
import { RoleGuardService } from './_services/auth/role-guard.service';
import { authInterceptorProviders } from '../app/_helpers/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { registerLocaleData } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

export let AppInjector: Injector;

export function tokenGetter() {
  return AppInjector.get(CookieService).get('auth-token');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      },
    }),

    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [authInterceptorProviders, RoleGuardService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
