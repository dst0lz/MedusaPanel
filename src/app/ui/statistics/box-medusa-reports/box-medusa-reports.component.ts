import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-medusa-reports',
  templateUrl: './box-medusa-reports.component.html',
  styleUrls: ['./box-medusa-reports.component.scss'],
})
export class BoxMedusaReportsComponent implements OnInit {
  reachableReports = ' / 30';
  reports: string = '0';

  @Input()
  allTime: number = 0;

  @Input()
  week: number = 0;

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
