import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/auth/token-storage.service';
import { PoseidonService } from 'src/app/_services/poseidon/poseidon.service';

@Component({
  selector: 'app-box-poseidon',
  templateUrl: './box-poseidon.component.html',
  styleUrls: ['./box-poseidon.component.scss'],
})
export class BoxPoseidonComponent implements OnInit {
  constructor(
    private messageService: PoseidonService,
    private router: Router,
    private tokenService: TokenStorageService
  ) {}
  messages: number = 0;

  ngOnInit(): void {
    this.messageService.getMessageCount().subscribe((response) => {
      this.messages = response.count;
    });

    var interval = setInterval(() => {
      this.messageService.getMessageCount().subscribe(
        (response) => {
          this.messages = response.count;
        },
        (err) => {
          clearInterval(interval);
        }
      );
    }, 1000 * 15);
  }

  openMessage(): void {
    this.messageService
      .getRandomMessage(this.tokenService.getUser().username)
      .subscribe((message) => {
        if (message.messageId != null) {
          this.router.navigateByUrl('/poseidon?id=' + message.messageId);
        }
      });
  }
}
