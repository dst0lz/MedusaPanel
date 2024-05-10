import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(displayMessage: string) {
    this.snackBar.open(displayMessage, '✘', {
      duration: 5000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }
}
