import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
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