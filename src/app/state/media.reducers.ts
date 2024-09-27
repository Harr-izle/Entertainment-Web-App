import { createReducer, on } from '@ngrx/store';
import { loadMediaItemsSuccess, setSearchItem, toggleBookmark } from './media.actions';
import { MediaState } from '../interfaces/media';

const initialState: MediaState = {
  mediaItems: [],
  searchItem: '',
};

export const mediaReducer = createReducer(
  initialState,
  on(loadMediaItemsSuccess, (state, { media }) => ({
    ...state,
    mediaItems: media.map(item => ({ ...item, isBookmarked: false })),
  })),
  on(setSearchItem, (state, { searchItem }) => ({
    ...state,
    searchItem,
  })),
  on(toggleBookmark, (state, { title }) => ({
    ...state,
    mediaItems: state.mediaItems.map(item =>
      item.title === title ? { ...item, isBookmarked: !item.isBookmarked } : item
    ),
  }))
);