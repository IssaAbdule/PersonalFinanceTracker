import { Injectable } from '@angular/core';
import { delay, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private mockUsers: { name: string; email: string; password: string }[] = [];

  constructor() {}

  login(payload: { email: string; password: string }): Observable<any> {
    const user = this.mockUsers.find(
      u => u.email === payload.email && u.password === payload.password
    );
    if (user) {
      const token = 'mock-token-' + Math.random().toString(36).substring(2);
      localStorage.setItem('token', token);
      return of({ token }).pipe(delay(500)); // Simulate network delay
    } else {
      return throwError(() => new Error('Invalid credentials')).pipe(delay(500));
    }
  }

  register(payload: { name: string; email: string; password: string }): Observable<any> {
    const exists = this.mockUsers.some(u => u.email === payload.email);
    if (exists) {
      return throwError(() => new Error('User already exists')).pipe(delay(500));
    }

    this.mockUsers.push(payload);
    return of({ message: 'Registered successfully' }).pipe(delay(500));
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
