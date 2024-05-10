import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { StatisticService } from 'src/app/_services/statistics/statistic.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  username: string = 'Loading ...';

  numberReports: number = 0;
  numberPoseidon: number = 0;
  numberTeamspeak: number = 0;
  numberWorktime: number = 0;

  numberWeekReports: number = 0;
  numberWeekPoseidon: number = 0;
  numberWeekTeamspeak: number = 0;
  numberWeekWorktime: number = 0;

  constructor(
    private statisticsService: StatisticService,
    private tokenService: TokenStorageService
  ) {}

  ngOnInit(): void {
    const username = this.tokenService.getUser().username;
    this.username = username;
    this.statisticsService.reportStatisticsWeek(username).subscribe((res) => {
      this.numberWeekReports = res.count;
    });

    this.statisticsService.poseidonStatisticsWeek(username).subscribe((res) => {
      this.numberWeekPoseidon = res.count;
    });

    this.statisticsService.reportStatistics(username).subscribe((res) => {
      this.numberReports = res.count;
    });

    this.statisticsService.poseidonStatistics(username).subscribe((res) => {
      this.numberPoseidon = res.count;
    });

    this.statisticsService.teamspeakStatistics(username).subscribe((res) => {
      this.numberTeamspeak = res.count;
    });
  }
}
