import { createAction, props } from '@ngrx/store';
import { Media } from '../interfaces/media';

export const loadMediaItems = createAction('[Media] Load Media Items');
export const loadMediaItemsSuccess = createAction(
  '[Media] Load Media Items Success',
  props<{ media: Media[] }>()
);
export const loadMediaFailure = createAction(
  '[Media] Load Media Failure',
  props<{ error: string }>()
);
export const setSearchItem = createAction(
  '[Media] Set Search Item',
  props<{ searchItem: string }>()
);