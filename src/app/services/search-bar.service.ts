import { effect, Injectable, Signal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {

  overlayOpen = signal(false);
  recentSearches = signal<string[]>(JSON.parse(window.localStorage.getItem('recentSearches') ?? '[]'));

  searchTerm = signal('');

  constructor() {}
  
  search(searchTerm: string) {
    this.searchTerm .set(searchTerm);
    this.overlayOpen.set(true);
    this.addToRecentSearches(searchTerm);

  }

  clearSearch() {
    this.searchTerm.set('');
    this.overlayOpen.set(false);
  }

  addToRecentSearches(searchTerm: string) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    this.recentSearches.set([lowerCaseSearchTerm,...this.recentSearches().filter((s) => s !== lowerCaseSearchTerm)

    ]);
  }

  deleteRecentSearches(searchTerm: string) {
    this.recentSearches.set(
      this.recentSearches().filter((s) => s !== searchTerm)
    );
  }

  saveLocalStorage = effect(() => {
    window.localStorage.setItem(
      'recentSearches',
      JSON.stringify(this.recentSearches())
    );

  });
}
