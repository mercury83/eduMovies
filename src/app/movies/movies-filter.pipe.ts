import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie.model';

@Pipe({
  name: 'moviesFilter'
})
export class MoviesFilterPipe implements PipeTransform {
  transform(movies: Movie[] = [], searchTerm: string): Movie[] {
    if (!searchTerm) {
      return movies;
    }

    const searchRegex = new RegExp(searchTerm, 'i');

    return movies.filter(movie => searchRegex.test(movie.name));
  }
}
