import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string = '';
  searchResults$!: Observable<any[]>;
  private searchTerms = new Subject<string>();

  constructor(private searchService: SearchService) {}

  ngOnInit(): void {
    this.searchResults$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      
      // ignore new term if same as previous term
      distinctUntilChanged(),
      
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchService.search(term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}