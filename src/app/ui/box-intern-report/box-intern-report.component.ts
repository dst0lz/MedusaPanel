import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-intern-report',
  templateUrl: './box-intern-report.component.html',
  styleUrls: ['./box-intern-report.component.scss'],
})
export class BoxInternReportComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  openLink(): void {
    window.open(
      'https://tcp-intern.thelair.eu/tools/intern-report/create/overview',
      '_blank'
    );
  }
}
