import { SignupComponent } from './components/signup/signup.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: SignupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'movie',
    component: HomeComponent
  },
  {
    path: 'tv',
    component: HomeComponent
  },
  {
    path: 'bookmarks',
    component: HomeComponent
  }
];