import { createSelector } from '@ngrx/store';
import { Media, MediaState } from '../interfaces/media';
import { AppState } from '../state/app.state';

export const selectMediaState = (state: AppState) => state.media;

export const selectAllMediaItems = createSelector(
  selectMediaState,
  (mediaState: MediaState) => mediaState.mediaItems
);

export const selectSearchItem = createSelector(
  selectMediaState,
  (state: MediaState) => state.searchItem
);

export const selectFilteredMediaItems = (category: string | null) =>
  createSelector(
    selectAllMediaItems,
    selectSearchItem,
    (mediaItems: Media[], searchItem: string = '') => {
      return mediaItems.filter((item) => {
        const matchesSearch = item.title
          .toLowerCase()
          .includes(searchItem.toLowerCase());
        const matchesCategory =
          !category || item.category.toLowerCase() === category.toLowerCase();
        return matchesSearch && matchesCategory;
      });
    }
  );