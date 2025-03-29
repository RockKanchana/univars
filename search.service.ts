import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private apiUrl = 'https://your-api-endpoint.com/search'; // Replace with your API

  constructor(private http: HttpClient) {}

  search(term: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?query=${term}`);
  }
}