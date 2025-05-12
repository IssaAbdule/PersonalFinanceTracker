import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-list',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  constructor(private router: Router){}

  // Mocked transaction list — replace this with real data later
  transactions = [
    { title: 'Salary', amount: 5000, type: 'income', date: '2025-05-01' },
    { title: 'Groceries', amount: 150, type: 'expense', date: '2025-05-03' },
    { title: 'Utilities', amount: 100, type: 'expense', date: '2025-05-05' }
  ];

  editTransaction(transaction: any) {
    console.log('Edit clicked:', transaction);
    // Navigate to edit form or open modal
  }

  deleteTransaction(transaction: any) {
    console.log('Delete clicked:', transaction);
    this.transactions = this.transactions.filter(t => t !== transaction);
  }

}
