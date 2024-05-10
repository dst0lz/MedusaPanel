import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankComponent } from './rank/rank.component';
import { BoxComponent } from './box/box.component';
import { BoxReportComponent } from './dashboard/box-report/box-report.component';
import { BoxInternReportComponent } from './box-intern-report/box-intern-report.component';
import { BoxPoseidonComponent } from './dashboard/box-poseidon/box-poseidon.component';
import { BoxLoginComponent } from './box-login/box-login.component';
import { BoxTeamlistComponent } from './dashboard/box-teamlist/box-teamlist.component';
import { BoxReportGuidelinesComponent } from './box-report-guidelines/box-report-guidelines.component';
import { BoxReportReasonComponent } from './report/box-report-reason/box-report-reason.component';
import { BoxReportOverviewComponent } from './report/box-report-overview/box-report-overview.component';
import { BoxReportInfoComponent } from './report/box-report-info/box-report-info.component';
import { MatIconModule } from '@angular/material/icon';
import { ReportBadgeComponent } from './report/report-badge/report-badge.component';
import { BoxMessageOverviewComponent } from './poseidon/box-message-overview/box-message-overview.component';
import { BoxMessageReasonComponent } from './poseidon/box-message-reason/box-message-reason.component';
import { BoxStatisticsComponent } from './statistics/box-statistics/box-statistics.component';
import { BoxMedusaReportsComponent } from './statistics/box-medusa-reports/box-medusa-reports.component';
import { BoxPoseidonReportsComponent } from './statistics/box-poseidon-reports/box-poseidon-reports.component';
import { BoxTeamspeakComponent } from './statistics/box-teamspeak/box-teamspeak.component';
import { BoxWorktimeComponent } from './statistics/box-worktime/box-worktime.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    RankComponent,
    BoxComponent,
    BoxReportComponent,
    BoxInternReportComponent,
    BoxPoseidonComponent,
    BoxLoginComponent,
    BoxTeamlistComponent,
    BoxReportGuidelinesComponent,
    BoxReportReasonComponent,
    BoxReportOverviewComponent,
    BoxReportInfoComponent,
    ReportBadgeComponent,
    BoxMessageOverviewComponent,
    BoxMessageReasonComponent,
    BoxStatisticsComponent,
    BoxMedusaReportsComponent,
    BoxPoseidonReportsComponent,
    BoxTeamspeakComponent,
    BoxWorktimeComponent,
  ],
  imports: [CommonModule, MatIconModule, FontAwesomeModule],
  exports: [
    RankComponent,
    BoxComponent,
    BoxReportComponent,
    BoxInternReportComponent,
    BoxPoseidonComponent,
    BoxLoginComponent,
    BoxTeamlistComponent,
    BoxReportGuidelinesComponent,
    BoxReportReasonComponent,
    BoxReportOverviewComponent,
    BoxReportInfoComponent,
    ReportBadgeComponent,
    BoxMessageOverviewComponent,
    BoxMessageReasonComponent,
    BoxStatisticsComponent,
    BoxMedusaReportsComponent,
    BoxPoseidonReportsComponent,
    BoxTeamspeakComponent,
    BoxWorktimeComponent,
  ],
})
export class UiModule {}
