import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PoseidonMessage } from 'src/app/store/model/poseidon';

const API_URL = 'https://api.thelair.eu/';

@Injectable({
  providedIn: 'root',
})
export class PoseidonService {
  constructor(private http: HttpClient) {}

  getMessageCount(): Observable<any> {
    return this.http.post(API_URL + 'message/count', {
      responseType: 'json',
    });
  }

  getMessageById(id: string): Observable<PoseidonMessage> {
    return this.http.post<PoseidonMessage>(API_URL + 'message', {
      id,
    });
  }

  getRandomMessage(username: string): Observable<PoseidonMessage> {
    return this.http.post<PoseidonMessage>(API_URL + 'message/random', {
      username,
    });
  }

  finishMessage(
    messageId: string,
    system: string,
    reason: string,
    username: string
  ): Observable<boolean> {
    return this.http.post<boolean>(API_URL + 'message/finish', {
      messageId,
      system,
      reason,
      username,
    });
  }
}
