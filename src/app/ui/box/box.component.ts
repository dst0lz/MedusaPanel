import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input()
  width = '200px';
  @Input()
  height = '200px';
  constructor() {}

  ngOnInit(): void {}
}
