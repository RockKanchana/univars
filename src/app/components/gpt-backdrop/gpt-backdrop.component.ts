import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { programTypes, programFields,  programDurations, programBudgets } from '../../utils/constants';
import { ScraperService } from '../../services/scraper.service';
import {LoaderComponent} from '../loader/loader.component';

@Component({
  selector: 'app-gpt-backdrop',
  imports: [
    FormsModule,
    MatSelectModule,
    LoaderComponent
  ],
  providers: [ScraperService],
  templateUrl: './gpt-backdrop.component.html',
  styleUrl: './gpt-backdrop.component.css',
  standalone: true
})
export class GptBackdropComponent {

  constructor(private scraperService: ScraperService) {}

  url = 'https://www.iit.ac.lk/';
  result: any = null;
  isLoading = false;

  programTypes = programTypes;
  programFields = programFields;
  programDurations = programDurations;
  programBudgets = programBudgets;

  selectedType: string = '';
  selectedField: string = '';
  selectedDuration: string = '';
  selectedBudget: string = '';

  onPrompt() {
    this.result = null;
    this.isLoading = true;
    this.scraperService.scrapeSite(this.url).subscribe({
      next: (res) => {
        this.result = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Scrape failed:', err);
        this.isLoading = false;
      }
    });
  }

  protected readonly isFinite = isFinite;
}
