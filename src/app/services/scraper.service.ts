import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  private baseUrl = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  scrapeSite(
    url: Array<string>,
    program_type: string,
    program_field: string,
    program_duration: string,
    program_fee: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/scrape`, {
      url,
      program_type,
      program_field,
      program_duration,
      program_fee
    });
  }
}
