import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../state/app.state';
import { setSearchItem } from '../../state/media.actions';
import { selectSearchItem } from '../../state/media.selectors';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  searchItem$: Observable<string>;
  placeholder: string = 'Search for movies or TV series';

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) {
    this.searchItem$ = this.store.select(selectSearchItem);
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const category = params.get('category');
      if (category === 'movie') {
        this.placeholder = 'Search for movies';
      } else if (category === 'tv') {
        this.placeholder = 'Search for TV series';
      } else {
        this.placeholder = 'Search for movies or TV series';
      }
    });
  }

  onSearchChange(value: string) {
    this.store.dispatch(setSearchItem({ searchItem: value }));
  }
}
