import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { SearchComponent } from "./components/search/search.component";
import { LoginComponent } from "./components/login/login.component";
import { Store } from '@ngrx/store';
import { loadMediaItems } from './state/media.actions';
import { MediaCardsComponent } from "./components/media-cards/media-cards.component";
import { MediaListComponent } from "./components/media-list/media-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, SearchComponent, LoginComponent, MediaCardsComponent, MediaListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Entertainment-Web-App';


  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadMediaItems());
  }
}
