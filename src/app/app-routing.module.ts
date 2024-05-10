import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { ModerationComponent } from './sites/moderation/moderation.component';
import { PoseidonComponent } from './sites/poseidon/poseidon.component';
import { ReportComponent } from './sites/report/report.component';
import { SitesModule } from './sites/sites.module';
import { StatisticsComponent } from './sites/statistics/statistics.component';
import { RoleGuardService } from './_services/auth/role-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ModerationComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRoles: ['*'],
    },
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'report',
    component: ReportComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRoles: ['ADMIN', 'SRGUARDIAN', 'GUARDIAN'],
    },
  },
  {
    path: 'poseidon',
    component: PoseidonComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRoles: ['ADMIN', 'SRGUARDIAN', 'GUARDIAN'],
    },
  },
  {
    path: 'statistics',
    component: StatisticsComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRoles: ['ADMIN', 'SRGUARDIAN', 'GUARDIAN'],
    },
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [SitesModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
