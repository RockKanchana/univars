import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { GptBackdropComponent } from "./components/gpt-backdrop/gpt-backdrop.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, RouterOutlet, MatToolbarModule, GptBackdropComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

}
