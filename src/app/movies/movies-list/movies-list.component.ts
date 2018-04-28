import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';
import { Observable } from 'rxjs/Observable';
import { of as Observable_of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Observable<Movie[]>;
  searchTerm: string;
  errorText: string;

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.movies = this.moviesService.getMovies().pipe(
      catchError(err => {
        this.errorText = typeof err.error === 'string' ? err.error : 'Could not load movies';
        return Observable_of([]);
      })
    );
  }
}
