import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { setSearchItem } from '../../state/media.actions';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent implements OnInit {
  currentCategory: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentCategory = this.route.snapshot.queryParamMap.get('category');
    });
  }

  isActive(category: string): string {
    if (category === 'home') {
      return this.router.url === '/' || this.router.url === '/home' ? 'active' : '';
    }
    return this.currentCategory === category ? 'active' : '';
  }

  navigate(route: string | null) {
    this.store.dispatch(setSearchItem({ searchItem: '' }));
    if (route === 'bookmarks') {
      this.router.navigate(['/bookmarks']);
    } else if (route) {
      this.router.navigate(['/'], { queryParams: { category: route } });
    } else {
      this.router.navigate(['/']);
    }
  }
}