import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-report-overview',
  templateUrl: './box-report-overview.component.html',
  styleUrls: ['./box-report-overview.component.scss'],
})
export class BoxReportOverviewComponent implements OnInit {
  @Input()
  reason: string = 'loading ...';
  @Input()
  server: string = 'loading ...';
  @Input()
  replay: string = 'loading ...';
  @Input()
  status: string = 'loading ...';

  constructor() {}

  ngOnInit(): void {}
}
