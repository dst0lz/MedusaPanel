import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report } from 'src/app/store/model/report';

const API_URL = 'https://api.thelair.eu/';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  constructor(private http: HttpClient) {}

  getReportCount(): Observable<any> {
    return this.http.post(API_URL + 'report/count', {
      responseType: 'json',
    });
  }

  getReportById(id: string): Observable<Report> {
    return this.http.post<Report>(API_URL + 'report', {
      id,
    });
  }

  getRandomReport(username: string): Observable<Report> {
    return this.http.post<Report>(API_URL + 'report/random', {
      username,
    });
  }

  finishReport(
    reportId: string,
    system: string,
    reason: string,
    username: string
  ): Observable<boolean> {
    return this.http.post<boolean>(API_URL + 'report/finish', {
      reportId,
      system,
      reason,
      username,
    });
  }
}
