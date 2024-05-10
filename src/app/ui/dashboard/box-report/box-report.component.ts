import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { ReportService } from 'src/app/_services/report/report.service';

@Component({
  selector: 'app-box-report',
  templateUrl: './box-report.component.html',
  styleUrls: ['./box-report.component.scss'],
})
export class BoxReportComponent implements OnInit {
  constructor(
    private reportService: ReportService,
    private router: Router,
    private tokenService: TokenStorageService
  ) {}
  reports: number = 0;

  ngOnInit(): void {
    this.reportService.getReportCount().subscribe((response) => {
      this.reports = response.count;
    });

    var interval = setInterval(() => {
      this.reportService.getReportCount().subscribe(
        (response) => {
          this.reports = response.count;
        },
        (err) => {
          clearInterval(interval);
        }
      );
    }, 1000 * 15);
  }

  openReport(): void {
    this.reportService
      .getRandomReport(this.tokenService.getUser().username)
      .subscribe((report) => {
        if (report.reportId != null) {
          this.router.navigateByUrl('/report?id=' + report.reportId);
        }
      });
  }
}
