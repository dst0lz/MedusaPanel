import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Report } from 'src/app/store/model/report';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { NotifierService } from 'src/app/_services/notifier.service';
import { ReportService } from 'src/app/_services/report/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  reportFound: boolean = true;
  love: boolean = false;

  reportId: string = '';
  report?: Report = undefined;

  readyButtonDisabled: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private reportService: ReportService,
    private notifier: NotifierService,
    private tokenService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.reportId = params['id'];
      if (this.reportId === undefined || this.reportId === '') {
        this.reportFound = false;
      } else if (this.reportId === '14222022') {
        this.love = true;
      } else {
        this.reportService.getReportById(this.reportId).subscribe((data) => {
          if (data == null) {
            this.reportFound = false;
          }
          this.report = data;
          this.changeReadyButton();
        });
        this.reportFound = true;
      }
    });
  }

  finishReport(reportInfos: string[]): void {
    let system = reportInfos[0];
    let reason = reportInfos[1];
    let username = this.tokenService.getUser().username;
    if (this.report === undefined) return;
    this.reportService
      .finishReport(this.report.reportId, system, reason, username)
      .subscribe((success) => {
        if (success) {
          this.notifier.showNotification('Report erfolgreich abgeschlossen');
        }
      });
    this.router.navigateByUrl('');
  }

  changeReadyButton(): void {
    if (this.report === undefined) return;
    const currentUser = this.tokenService.getUser().username;
    if (this.report.assignedUser === currentUser) {
      if (this.report.reportState === 'Zugewiesen') {
        this.readyButtonDisabled = false;
      }
    }
  }
}
