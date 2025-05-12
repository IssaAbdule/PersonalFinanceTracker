import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private router: Router){}

  addTransaction(){
    // Here you can handle your form logic like saving the transaction
    // For example, you could call a service to save the transaction to a backend
    this.router.navigate(["/add-transaction"]);
  }


}
