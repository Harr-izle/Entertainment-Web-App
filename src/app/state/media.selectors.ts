import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MediaState } from './media.reducers';

export const selectMediaState = createFeatureSelector<MediaState>('media');

export const selectAllMedia = createSelector(
  selectMediaState,
  (state: MediaState) => state.items
);

export const selectFilteredMedia = createSelector(
  selectMediaState,
  (state: MediaState) => state.filteredItems
);

export const selectLoading = createSelector(
  selectMediaState,
  (state: MediaState) => state.loading
);

export const selectError = createSelector(
  selectMediaState,
  (state: MediaState) => state.error
);

export const selectBookmarkedMedia = createSelector(selectAllMedia, (media) =>
  media.filter((item) => item.isBookmarked)
);

export const selectTrendingMedia = createSelector(selectAllMedia, (media) =>
  media.filter((item) => item.isTrending)
);

export const selectMediaByCategory = (category: string) =>
  createSelector(selectAllMedia, (media) =>
    media.filter((item) => item.category === category)
  );
