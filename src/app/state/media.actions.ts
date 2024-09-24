import { createAction, props } from '@ngrx/store';
import { IMedia } from '../interfaces/media';

export const loadMedia = createAction('[Media] Load Media');
export const loadMediaSuccess = createAction(
  '[Media] Load Media Success',
  props<{ media: IMedia[] }>()
);
export const loadMediaFailure = createAction(
  '[Media] Load Media Failure',
  props<{ error: any }>()
);
export const toggleBookmark = createAction(
  '[Media] Toggle Bookmark',
  props<{ title: string }>()
);
export const searchMedia = createAction(
  '[Media] Search Media',
  props<{ query: string }>()
);


