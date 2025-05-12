import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-add',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  // Define the transaction object with properties bound to the form
  transaction = {
    title: '',
    amount: null as number | null,
    type: '',
    date: ''
  };

  constructor(private router: Router) {}

  // Method called when form is submitted
  addTransaction() {
    // Here you can send this.transaction to your backend or service
    console.log('Transaction Submitted:', this.transaction);

    // Redirect to the transactions page
    this.router.navigate(['/transaction']);
  }

}
