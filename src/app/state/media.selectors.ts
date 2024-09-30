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

export const selectBookmarkedItems = createSelector(
  selectAllMediaItems,
  selectSearchItem,
  (mediaItems: Media[], searchItem: string = '') => 
    mediaItems.filter(item => 
      item.isBookmarked && 
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    )
);

export const selectTrendingItems = createSelector(
  selectAllMediaItems,
  selectSearchItem,
  (mediaItems: Media[], searchItem: string = '') => 
    mediaItems.filter(item => 
      item.isTrending && 
      item.title.toLowerCase().includes(searchItem.toLowerCase())
    )
);

export const selectFilteredMediaItems = createSelector(
  selectAllMediaItems,
  selectSearchItem,
  (mediaItems: Media[], searchItem: string = '', props: { category: string | null }) => 
    mediaItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchItem.toLowerCase());
      let matchesCategory = true;
      
      if (props.category === 'movie') {
        matchesCategory = item.category.toLowerCase() === 'movie';
      } else if (props.category === 'tv') {
        matchesCategory = item.category.toLowerCase() === 'tv series';
      }
      
      return matchesSearch && matchesCategory && !item.isTrending;
    })
);