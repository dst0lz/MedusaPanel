import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-report-badge',
  templateUrl: './report-badge.component.html',
  styleUrls: ['./report-badge.component.scss'],
})
export class ReportBadgeComponent implements OnInit, AfterViewInit {
  @Input()
  name: string = '';

  @Input()
  inputName: string = '';

  @Output()
  selectReason = new EventEmitter<string[]>();

  constructor() {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {}

  select(): void {
    this.selectReason.emit([this.name, this.inputName]);
  }
}
