import { createReducer, on } from '@ngrx/store';
import { loadMediaItemsSuccess, setSearchItem } from './media.actions';
import { MediaState } from '../interfaces/media';

const initialState: MediaState = {
  mediaItems: [],
  searchItem: '',
};

export const mediaReducer = createReducer(
  initialState,
  on(loadMediaItemsSuccess, (state, { media }) => ({
    ...state,
    mediaItems: media,
  })),
  on(setSearchItem, (state, { searchItem }) => ({
    ...state,
    searchItem,
  }))
);