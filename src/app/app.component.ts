import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { SearchComponent } from "./components/search/search.component";
import { LoginComponent } from "./components/login/login.component";
import { ApiService } from './services/api.service';
import { Store } from '@ngrx/store';
import { loadMedia } from './state/media.actions';
import { MediaState } from './state/media.reducers';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, SearchComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Entertainment-Web-App';


  constructor( private store: Store< MediaState>,){}

  ngOnInit(){
    this.store.dispatch(loadMedia());
  }
}
