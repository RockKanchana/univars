import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import {
  ProgramTypes,
  ProgramFields,
  ProgramDurations,
  ProgramBudgets,
  PrivateInstitutes
} from '../../utils/constants';
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

  url = [...PrivateInstitutes];
  result: any = null;

  isLoading = false;
  isError = false;

  programTypes = ProgramTypes;
  programFields = ProgramFields;
  programDurations = ProgramDurations;
  programBudgets = ProgramBudgets;

  selectedType: string = '';
  selectedField: string = '';
  selectedDuration: string = '';
  selectedBudget: string = '';

  onPrompt() {
    this.result = null;
    this.isLoading = true;
    this.scraperService.scrapeSite(
      this.url,
      this.selectedType,
      this.selectedField,
      this.selectedDuration,
      this.selectedBudget).subscribe({
      next: (res) => {
        this.result = res;
        this.isLoading = false;
        this.isError = false;

        // this.selectedType = this.selectedField = this.selectedDuration = this.selectedBudget = '';
      },
      error: (err) => {
        console.error('Scrape failed:', err);
        this.isLoading = false;
        this.isError = true;
      }
    });
  }
}
