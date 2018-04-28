import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { of as Observable_of } from 'rxjs/observable/of';

@Injectable()
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
      return this.http.get('https://ngmovies.herokuapp.com/api/getMovies').pipe(
        map(res => res ? res : [])
      ) as Observable<Movie[]>;
  }
}
