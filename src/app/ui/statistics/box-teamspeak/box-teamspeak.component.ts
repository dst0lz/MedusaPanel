import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-teamspeak',
  templateUrl: './box-teamspeak.component.html',
  styleUrls: ['./box-teamspeak.component.scss'],
})
export class BoxTeamspeakComponent implements OnInit {
  reachableTime: string = ' / 2h';

  @Input()
  time: string = '0';

  constructor() {}

  ngOnInit(): void {}
}
