import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-reports',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

  constructor(private router: Router){}

   transactions = [
    { title: 'Salary', amount: 5000, type: 'income', date: '2025-05-01' },
    { title: 'Groceries', amount: 200, type: 'expense', date: '2025-05-03' },
    { title: 'Utilities', amount: 120, type: 'expense', date: '2025-05-05' },
    { title: 'Freelance', amount: 1500, type: 'income', date: '2025-05-06' }
  ];

  get totalIncome(): number {
    return this.transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
  }

  get totalExpenses(): number {
    return this.transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);
  }

  get balance(): number {
    return this.totalIncome - this.totalExpenses;
  }

}
