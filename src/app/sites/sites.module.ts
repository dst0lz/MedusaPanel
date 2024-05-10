import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModerationComponent } from './moderation/moderation.component';
import { UiModule } from '../ui/ui.module';
import { CoreModule } from '../core/core.module';
import { ReportComponent } from './report/report.component';
import { PoseidonComponent } from './poseidon/poseidon.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [ModerationComponent, ReportComponent, PoseidonComponent, StatisticsComponent],
  imports: [CommonModule, UiModule, CoreModule],
})
export class SitesModule {}
