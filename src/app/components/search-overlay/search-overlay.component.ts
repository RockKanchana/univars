import { Component, computed, inject } from '@angular/core';
import { MatDivider} from '@angular/material/divider';
import { MatListModule} from '@angular/material/list'; 
import { SearchBarService } from '../../services/search-bar.service';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-search-overlay',
  standalone: true,
  imports: [MatDivider, MatListModule, MatIcon],
  templateUrl: './search-overlay.component.html',
  styleUrls: ['./search-overlay.component.css']

})
export class SearchOverlayComponent {
  searchBarService = inject(SearchBarService);
  recentSearches = computed(() => this.searchBarService.recentSearches().slice(0, 5)); // Accessing the signal directly from the service


  deleteRecentSearch(searchTerm: string) {
    this.searchBarService.deleteRecentSearches(searchTerm); // Call the service method to delete the search term

  }

  performSearch(searchTerm: string) {
    this.searchBarService.search(searchTerm); // Call the service method to perform the search
    
  }

}

  
  
    