import { loadMedia, loadMediaFailure, loadMediaSuccess } from './media.actions';
import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

@Injectable()
export class MediaEffects {
  constructor(private apiservice: ApiService,  private actions$: Actions,) {}

  loadMediaEffects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMedia),
      mergeMap(() =>
        this.apiservice.fetchMedia().pipe(
          map((media) => loadMediaSuccess({ media })),
          catchError((error) => {
            console.log(error);
            return of(loadMediaFailure({ error }));
          })
        )
      )
    )
  );
}
