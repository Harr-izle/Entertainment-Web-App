export interface Itrending{
    small: string;
    large: string;
}

export interface Iregular{
    small: string;
    medium: string;
    large: string;
}

export interface IThumbnail {
    trending: Itrending;
    regular: Iregular;
}

export interface IMedia{
    title: string;
    thumbnail: IThumbnail;
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
}

