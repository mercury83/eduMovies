import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { StarComponent } from './shared/star/star.component';
import { MusicGridComponent } from './music/music-grid/music-grid.component';

import { MoviesFilterPipe } from './movies/movies-filter.pipe';

import { MoviesService } from './movies/movies.service';
import { MusicService } from './music/music.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MoviesFilterPipe,
    StarComponent,
    MusicGridComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [MoviesService, MusicService],
  bootstrap: [AppComponent]
})
export class AppModule {}
