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

export const selectTrendingItems = createSelector(
  selectAllMediaItems,
  (mediaItems: Media[]) => mediaItems.filter(item => item.isTrending)
);

export const selectRecommendedItems = createSelector(
  selectAllMediaItems,
  selectSearchItem,
  (mediaItems: Media[], searchItem: string = '') => 
    mediaItems.filter(item => 
      !item.isTrending && 
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    )
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
        let matchesCategory = true;
        
        if (category === 'movie') {
          matchesCategory = item.category.toLowerCase() === 'movie';
        } else if (category === 'tv') {
          matchesCategory = item.category.toLowerCase() === 'tv series';
        } else if (category === 'bookmarks') {
          matchesCategory = item.isBookmarked;
        }
        
        return matchesSearch && matchesCategory;
      });
    }
  );

export const selectBookmarkedItems = createSelector(
  selectAllMediaItems,
  selectSearchItem,
  (mediaItems: Media[], searchItem: string = '') =>
    mediaItems.filter(item => 
      item.isBookmarked && 
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    )
);