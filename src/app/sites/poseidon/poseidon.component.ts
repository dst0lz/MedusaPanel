import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoseidonMessage } from 'src/app/store/model/poseidon';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { NotifierService } from 'src/app/_services/notifier.service';
import { PoseidonService } from 'src/app/_services/poseidon/poseidon.service';

@Component({
  selector: 'app-poseidon',
  templateUrl: './poseidon.component.html',
  styleUrls: ['./poseidon.component.scss'],
})
export class PoseidonComponent implements OnInit {
  messageFound: boolean = true;

  messageId: string = '';
  message?: PoseidonMessage = undefined;

  readyButtonDisabled: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notifier: NotifierService,
    private tokenService: TokenStorageService,
    private messageService: PoseidonService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.messageId = params['id'];
      if (this.messageId === undefined || this.messageId === '') {
        this.messageFound = false;
      } else {
        this.messageService.getMessageById(this.messageId).subscribe((data) => {
          if (data === null) {
            this.messageFound = false;
          }
          this.message = data;
          this.changeReadyButton();
        });
        this.messageFound = true;
      }
    });
  }

  getDateString(date: Date): string {
    const datepipe: DatePipe = new DatePipe('de-DE');
    let formatted = datepipe.transform(date, 'dd.MM.YYYY HH:mm:ss');
    if (formatted != null) {
      return formatted;
    }
    return 'loading ...';
  }

  finishMessage(messageInfos: string[]): void {
    let system = messageInfos[0];
    let reason = messageInfos[1];
    let username = this.tokenService.getUser().username;
    if (this.message === undefined) return;
    this.messageService
      .finishMessage(this.message.messageId, system, reason, username)
      .subscribe((success) => {
        if (success) {
          this.notifier.showNotification('Message erfolgreich bearbeitet');
        }
      });
    this.router.navigateByUrl('');
  }

  changeReadyButton(): void {
    if (this.message === undefined) return;
    const currentUser = this.tokenService.getUser().username;
    if (this.message.assignedUser === currentUser) {
      if (this.message.reportState === 'Zugewiesen') {
        this.readyButtonDisabled = false;
      }
    }
  }
}
