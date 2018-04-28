import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Music } from './model/music.model';
import { of as Observable_of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

@Injectable()
export class MusicService {
  constructor(private http: HttpClient) {}

  getMusicData(): Observable<Music[]> {
    return this.http
      .get('https://ngmusicdb.herokuapp.com/api/getMusic')
      .pipe(map(res => (res ? res : []))) as Observable<Music[]>;
  }
}
