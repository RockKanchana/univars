import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay'; // Correct import for OverlayModule
import { SearchBarService } from '../../services/search-bar.service';
import { SearchOverlayComponent } from "../search-overlay/search-overlay.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, OverlayModule, SearchOverlayComponent, NgClass],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'] // Note: corrected 'styleUrl' to 'styleUrls'
})
export class SearchBarComponent {
  
  SearchBarService = inject(SearchBarService); 
  overlayOpen = this.SearchBarService.overlayOpen;
  searchTerm = this.SearchBarService.searchTerm; // Accessing the signal directly from the service
searchInput: any;
close: any;

  search(searchTerm: string) {
    
    if(!searchTerm) return; // Check if searchTerm is not empty or undefined

    this.SearchBarService.search(searchTerm); // Open the overlay
  }

  clearSearch() {
    this.SearchBarService.clearSearch(); // Close the overlay
  }

}

