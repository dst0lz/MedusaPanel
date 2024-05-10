import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-poseidon-reports',
  templateUrl: './box-poseidon-reports.component.html',
  styleUrls: ['./box-poseidon-reports.component.scss'],
})
export class BoxPoseidonReportsComponent implements OnInit {
  reachableReports: string = ' / 100';
  reports: string = '0';

  @Input()
  allTime: number = 0;

  @Input()
  week: number = 0;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.reports = this.week + this.reachableReports;
    }, 1000);
  }

  changeAllTime(state: string) {
    if (state === 'alltime') {
      this.reports = this.allTime + '';
    } else {
      this.reports = this.week + this.reachableReports;
    }
  }
}
