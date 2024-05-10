import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://api.thelair.eu/';

@Injectable({
  providedIn: 'root',
})
export class TeamlistService {
  constructor(private http: HttpClient) {}

  getTeamlist(): Observable<any> {
    return this.http.post(API_URL + 'teamlist', {
      responseType: 'json',
    });
  }
}
