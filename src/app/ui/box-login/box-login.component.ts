import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-box-login',
  templateUrl: './box-login.component.html',
  styleUrls: ['./box-login.component.scss'],
})
export class BoxLoginComponent implements OnInit {
  @Output()
  submit = new EventEmitter<string[]>();

  constructor() {}
  ngOnInit(): void {}

  callParent(username: string, password: string) {
    this.submit.emit([username, password]);
  }
}
