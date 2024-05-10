import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-box-statistics',
  templateUrl: './box-statistics.component.html',
  styleUrls: ['./box-statistics.component.scss'],
})
export class BoxStatisticsComponent implements OnInit {
  @Input()
  inputHeading: string = '';

  @Input()
  inputHeadingAllTime: string = '';

  @Input()
  allTimeStatistics = false;

  @Output()
  alltimeChange = new EventEmitter<string>();

  heading: string = '';

  constructor() {}

  ngOnInit(): void {
    this.heading = this.inputHeading;
  }

  switchAllTimeStatistics() {
    if (this.allTimeStatistics) {
      this.heading = this.inputHeading;
      this.allTimeStatistics = false;
      this.alltimeChange.emit('week');
    } else {
      this.heading = this.inputHeadingAllTime;
      this.allTimeStatistics = true;
      this.alltimeChange.emit('alltime');
    }
  }
}
