import { Album } from './album.model';

export interface Artist {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: Album[];
  genre: string;
  albumsVisible?: boolean;
}
