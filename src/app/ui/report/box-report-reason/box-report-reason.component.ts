import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotifierService } from 'src/app/_services/notifier.service';

@Component({
  selector: 'app-box-report-reason',
  templateUrl: './box-report-reason.component.html',
  styleUrls: ['./box-report-reason.component.scss'],
})
export class BoxReportReasonComponent implements OnInit {
  selectedFirst: string = '';
  selectedSecond: string = '';

  allChecked: boolean = false;

  @Output()
  finishReport = new EventEmitter<string[]>();

  @Input()
  readyButtonDisabled: boolean = true;

  constructor(private notifer: NotifierService) {}

  ngOnInit(): void {}

  selectReason(reason: string[]): void {
    let rowType = reason[1];
    if (rowType === 'first') {
      this.selectedFirst = reason[0];
    } else if (rowType === 'second') {
      this.selectedSecond = reason[0];
    }
  }

  ready(): void {
    if (this.readyButtonDisabled) {
      this.notifer.showNotification(
        'Diese Message kann nicht mehr bearbeitet werden'
      );
      return;
    }
    if (this.selectedFirst === '' || this.selectedSecond === '') {
      this.notifer.showNotification(
        'Es wurden noch nicht alle Felder ausgewählt'
      );
      return;
    }

    if (this.allChecked === false) {
      this.notifer.showNotification('Es muss alles überprüft sein');
      return;
    }
    this.finishReport.emit([this.selectedFirst, this.selectedSecond]);
  }

  changeChecked(): void {
    if (this.allChecked) {
      this.allChecked = false;
    } else {
      this.allChecked = true;
    }
  }
}
