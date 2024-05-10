import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-report-guidelines',
  templateUrl: './box-report-guidelines.component.html',
  styleUrls: ['./box-report-guidelines.component.scss'],
})
export class BoxReportGuidelinesComponent implements OnInit {
  @Input()
  name: string = 'loading ...';

  @Input()
  link: string = '';

  constructor() {}

  ngOnInit(): void {}

  openLink(): void {
    window.open(this.link, '_blank');
  }
}
