import { Artist } from './artist.model';

export interface Music {
  _id: string;
  artists: Artist[];
}
