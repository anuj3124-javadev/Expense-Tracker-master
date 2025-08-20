import { Component, computed, effect, signal } from '@angular/core';
import { data } from '../global';
import { FormsModule } from '@angular/forms';
import { toggleMenu } from '../global';

@Component({
  selector: 'app-history',
  imports: [FormsModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {

  totalAmount= 0;
  displayAmount = signal(this.totalAmount.toFixed(2).toString());
  activePanel = signal('all');
  showAll = false;

  menuToggle = computed(() => toggleMenu());

  showAllHandle(){
    this.showAll = !this.showAll;
  }

  maxYear: number = new Date().getFullYear();
  selectedYear = signal(new Date().getFullYear());
  selectedMonth = signal<string>(new Date().getFullYear() + "-" + (new Date().getMonth() + 1).toString().padStart(2, '0'));

  dataSet = computed(() => data());

  // method to changle selectedMonth value on Input change:
  updateMonthHandle(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const tempMonth = (parseInt(value.substring(5, 7)) - 1).toString();
    const tempYear = parseInt(value.substring(0, 4));
    this.selectedYear.set(tempYear);
    this.selectedMonth.set(value);
  }

  // method to changle selectedMonth value on Input change:
  updateYearHandle(event: Event) {
    const tempYear = (event.target as HTMLInputElement).value;
    this.selectedYear.set(Number(tempYear));
  }

  // for year filter
  filteredDataAccordingToMonth = computed(() =>
    this.dataSet()
      .filter(item => new Date(item.date).getMonth().toString() === (parseInt(this.selectedMonth().substring(5, 7)) - 1).toString())
      .slice()
      .reverse()
  );



  // for year filter
  filteredDataAccordingToYear = computed(() =>
    this.dataSet()
      .filter(item => new Date(item.date).getFullYear() === this.selectedYear())
      .slice()
      .reverse()
  );

  constructor() {
    effect(() => {
      if (this.activePanel() === 'all') {
        this.totalAmount = this.dataSet().reduce((acc: number, item) => acc + Number(item.amount || 0), 0);
      } else if (this.activePanel() === 'monthly') {
        this.totalAmount = this.dataSet().filter((item) => new Date(item.date).getMonth().toString() === (parseInt(this.selectedMonth().substring(5, 7)) - 1).toString()).reduce((acc: number, item) => acc + Number(item.amount || 0), 0);
      } else if (this.activePanel() === 'yearly') {
        this.totalAmount = this.dataSet().filter((item) => new Date(item.date).getFullYear() === this.selectedYear()).reduce((acc: number, item) => acc + Number(item.amount || 0), 0);
      }
      this.updateFormate();
      console.log(this.displayAmount());
    });

    
    effect(() => {
      this.updateFormate();
    });
    
  }
  
  // this effect to make total Amount Displable
  updateFormate(){
    const parts = this.totalAmount.toString().split('.');
    const formattedNumber = new Intl.NumberFormat('en-IN').format(Number(parts[0]));
    const finalResult = parts.length > 1 ? `${formattedNumber}.${parts[1]}` : formattedNumber;
    this.displayAmount.set(finalResult);
  }

  deleteItem(id: string) {
    data.update((items) => items.filter((item) => item.id !== id));
    localStorage.setItem('expenses', JSON.stringify(data()));
    alert('Expense deleted!');
  }

  editItem(id: string) {
    var item = this.dataSet().find(item => item.id === id);
    if (item) {
      const updatedTitle = prompt('Enter new title', item.title);
      const updatedAmount = prompt('Enter new amount', ''+item.amount);
      if (updatedTitle && updatedAmount) {
        data.update((items) => items.map((item) => item.id === id ? { ...item, title: updatedTitle, amount: parseInt(updatedAmount) , id: item.id , date: item.date } : item));
        localStorage.setItem('expenses', JSON.stringify(data()));
        alert('Expense updated!');
      }
    }

  }
}
