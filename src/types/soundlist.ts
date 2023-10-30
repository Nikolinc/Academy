export interface ISoundList {
  key: string;
  title: string;
  image: string;
  category: category;
}

export enum category {
  NewPlaylist = "New Playlist",
  Trending = "Trending",
}
