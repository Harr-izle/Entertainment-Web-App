import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { setSearchItem } from '../../state/media.actions';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(private router: Router, private store: Store<AppState>) {}

  setCategory(category: string | null) {
    this.store.dispatch(setSearchItem({ searchItem: '' }));
    if (category === 'bookmarks') {
      this.router.navigate(['/bookmarks']);
    } else if (category) {
      this.router.navigate(['/'], { queryParams: { category } });
    } else {
      this.router.navigate(['/']);
    }
  }
}
