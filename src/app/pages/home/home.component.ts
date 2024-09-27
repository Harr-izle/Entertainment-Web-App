import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { MediaListComponent } from "../../components/media-list/media-list.component";
import { MediaCardsComponent } from "../../components/media-cards/media-cards.component";
import { SearchComponent } from "../../components/search/search.component";
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from '../../state/app.state';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NavComponent, MediaListComponent, MediaCardsComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  category$!: Observable<string | null>;
  isBoomarked: boolean = false;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit() {
    this.category$ = this.route.queryParamMap.pipe(
      map(params => params.get('category'))
    );
  }


}
