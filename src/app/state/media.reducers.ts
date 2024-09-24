import { createReducer, on } from '@ngrx/store';
import * as MediaActions from './media.actions';
import { IMedia } from '../interfaces/media';

export interface MediaState {
  items: IMedia[];
  filteredItems: IMedia[];
  loading: boolean;
  error: any;
}

export const initialState: MediaState = {
  items: [],
  filteredItems: [],
  loading: false,
  error: null,
};

export const mediaReducer = createReducer(
  initialState,
  on(MediaActions.loadMedia, (state) => ({ ...state, loading: true })),
  on(MediaActions.loadMediaSuccess, (state, { media }) => ({
    ...state,
    items: media,
    filteredItems: media,
    loading: false,
  })),
  on(MediaActions.loadMediaFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(MediaActions.toggleBookmark, (state, { title }) => ({
    ...state,
    items: state.items.map((item) =>
      item.title === title
        ? { ...item, isBookmarked: !item.isBookmarked }
        : item
    ),
    filteredItems: state.filteredItems.map((item) =>
      item.title === title
        ? { ...item, isBookmarked: !item.isBookmarked }
        : item
    ),
  })),
  on(MediaActions.searchMedia, (state, { query }) => ({
    ...state,
    filteredItems: state.items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    ),
  }))
);
