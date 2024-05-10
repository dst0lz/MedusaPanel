import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TeamlistService } from 'src/app/_services/other/teamlist.service';

@Component({
  selector: 'app-box-teamlist',
  templateUrl: './box-teamlist.component.html',
  styleUrls: ['./box-teamlist.component.scss'],
})
export class BoxTeamlistComponent implements OnInit {
  constructor(private teamlistService: TeamlistService) {}

  teamlist: any;

  @Output()
  getUsername = new EventEmitter<string>();

  ngOnInit(): void {
    this.teamlistService.getTeamlist().subscribe((teamlist) => {
      this.teamlist = teamlist;
    });
  }

  callParent(value: string) {
    this.getUsername.emit(value);
  }
}
