import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://api.thelair.eu/';

@Injectable({
  providedIn: 'root',
})
export class StatisticService {
  constructor(private http: HttpClient) {}

  reportStatisticsWeek(username: string): Observable<any> {
    return this.http.post<number>(API_URL + '/statistics/report/week', {
      username: username,
    });
  }

  poseidonStatisticsWeek(username: string): Observable<any> {
    return this.http.post<number>(API_URL + '/statistics/poseidon/week', {
      username: username,
    });
  }

  reportStatistics(username: string): Observable<any> {
    return this.http.post<number>(API_URL + '/statistics/report/alltime', {
      username: username,
    });
  }

  poseidonStatistics(username: string): Observable<any> {
    return this.http.post<number>(API_URL + '/statistics/poseidon/alltime', {
      username: username,
    });
  }

  teamspeakStatistics(username: string): Observable<any> {
    return this.http.post<string>(API_URL + '/statistics/teamspeak/alltime', {
      username: username,
    });
  }
}
