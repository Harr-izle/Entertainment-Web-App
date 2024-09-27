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

export const selectIsBookmarked = createSelector(
  selectMediaState,
  (state: MediaState) => state.isBookmarked
);

export const selectTrendingItems = createSelector(
  selectAllMediaItems,
  selectIsBookmarked,
  selectSearchItem,
  (mediaItems: Media[], isBookmarked: boolean, searchItem: string = '') => 
    mediaItems.filter(item => 
      item.isTrending && 
      (!isBookmarked || item.isBookmarked) &&
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    )
);

export const selectFilteredMediaItems = createSelector(
  selectAllMediaItems,
  selectIsBookmarked,
  selectSearchItem,
  (mediaItems: Media[], isBookmarked: boolean, searchItem: string = '', category: string | null = null) => 
    mediaItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchItem.toLowerCase());
      const matchesBookmark = !isBookmarked || item.isBookmarked;
      let matchesCategory = true;
      
      if (category === 'movie') {
        matchesCategory = item.category.toLowerCase() === 'movie';
      } else if (category === 'tv') {
        matchesCategory = item.category.toLowerCase() === 'tv series';
      }
      
      return matchesSearch && matchesBookmark && matchesCategory && !item.isTrending;
    })
);