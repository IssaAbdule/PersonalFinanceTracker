import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { AddComponent } from './transactions/add/add.component';
import { ListComponent } from './transactions/list/list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // <-- this sets login as the landing page
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-transaction', component: AddComponent},
  { path: 'view-transactions', component: ListComponent},
  { path: 'reports', component: ReportsComponent},
  // any other routes...
];
