import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-message-overview',
  templateUrl: './box-message-overview.component.html',
  styleUrls: ['./box-message-overview.component.scss'],
})
export class BoxMessageOverviewComponent implements OnInit {
  reason: string = 'Poseidon';

  @Input()
  server: string = 'loading ...';
  @Input()
  chatlog: string = 'Nicht vorhanden';
  @Input()
  message: string = 'loading ...';

  constructor() {}

  ngOnInit(): void {}
}
