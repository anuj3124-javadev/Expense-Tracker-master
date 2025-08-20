import { Component, computed } from '@angular/core';
import { InputComponent } from "./input/input.component";
import { HistoryComponent } from "./history/history.component";
import { toggleMenu } from './global';
@Component({
  selector: 'app-root',
  imports: [InputComponent, HistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Expense Tracker';

  menuToggle = computed(() => toggleMenu());
}
