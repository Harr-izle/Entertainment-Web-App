import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { 
    path: '', 
    component: HomeComponent, 
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: 'all', component: HomeComponent },
      { path: 'movie', component: HomeComponent },
      { path: 'tv', component: HomeComponent },
      { path: 'bookmarks', component: HomeComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];