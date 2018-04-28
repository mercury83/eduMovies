import { Artist } from './../model/artist.model';
import { Music } from './../model/music.model';
import { MusicService } from './../music.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of as Observable_of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-music-grid',
  templateUrl: './music-grid.component.html',
  styleUrls: ['./music-grid.component.css']
})
export class MusicGridComponent implements OnInit {

  musicData: Observable<Music[]>;
  errorText: string;

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.musicData = this.musicService.getMusicData().pipe(
      catchError(err => {
        this.errorText = typeof err.error === 'string' ? err.error : 'Could not load music data';
        return Observable_of([]);
      })
    );
  }

  toggleAlbumsVisibility(artist: Artist) {
    artist.albumsVisible = !artist.albumsVisible;
  }

}
