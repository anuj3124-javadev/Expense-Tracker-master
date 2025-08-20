import { Component, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { data , toggleMenu} from '../global';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  title: string = '';
  amount: number | null = null;

  menuToggle = computed(() => toggleMenu());

  toggleMenu() {
    toggleMenu.set(!toggleMenu());
  }


  addExpense() {
    if (this.title !== '' && this.amount !== null && this.amount > 0 && this.amount < 100000000 && this.title.length < 50) {
      let newData = {id: crypto.randomUUID(), title: this.title, amount: this.amount, date: new Date().toLocaleDateString() };
      data.update((items) => [...items, newData]);
      localStorage.setItem('expenses', JSON.stringify(data()));
      alert('Expense added!');
      this.title = '';
      this.amount = null;
    }else{
      alert('Invalid input!');
    }
  }
}
