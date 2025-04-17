import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { programTypes, programFields,  programDurations, programBudgets } from '../../utils/constants';

@Component({
  selector: 'app-gpt-backdrop',
  imports: [
    FormsModule,
    MatSelectModule
  ],
  templateUrl: './gpt-backdrop.component.html',
  styleUrl: './gpt-backdrop.component.css',
  standalone: true
})
export class GptBackdropComponent {
  programTypes = programTypes;
  programFields = programFields;
  programDurations = programDurations;
  programBudgets = programBudgets;

  selectedType: string = '';
  selectedField: string = '';
  selectedDuration: string = '';
  selectedBudget: string = '';
}
