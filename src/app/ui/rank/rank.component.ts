import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ui-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.scss'],
})
export class RankComponent implements OnInit {
  @Input()
  name: string = '';
  @Input()
  role: string = '';
  @Input()
  color: string = '';
  @Input()
  isTeamlist: boolean = false;
  @Output()
  clickUser = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  callParent(value: string): void {
    this.clickUser.emit(value);
  }
}
