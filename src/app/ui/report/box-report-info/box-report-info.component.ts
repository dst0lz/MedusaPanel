import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-report-info',
  templateUrl: './box-report-info.component.html',
  styleUrls: ['./box-report-info.component.scss'],
})
export class BoxReportInfoComponent implements OnInit {
  @Input()
  reportedName: string = 'loading ...';

  @Input()
  role: string = 'loading ...';

  @Input()
  color: string = '#5555FF';

  @Input()
  uuid: string = 'loading ...';

  @Input()
  registeredAt: string = 'loading ...';

  @Input()
  reporter: string = 'loading ...';

  @Input()
  currentEditor: string = 'loading ...';

  @Input()
  status: string = 'loading ...';

  constructor() {}

  ngOnInit(): void {}

  copyUUID(): void {
    navigator.clipboard.writeText(this.uuid);
  }

  copyName(): void {
    navigator.clipboard.writeText(this.reportedName);
  }
}
