import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, FormsModule, RouterModule],  // CommonModule is required for *ngIf, *ngFor, etc.
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage: string = '';

  // Hardcoded credentials
  private readonly validEmail = 'admin@example.com';
  private readonly validPassword = 'admin123';

  constructor(
    //private readonly authService: AuthService,
    private readonly router: Router,
    //private readonly toastr: ToastrService
  ) {}

  login() {
    if (this.email === this.validEmail && this.password === this.validPassword) {
      this.errorMessage = '';
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}
