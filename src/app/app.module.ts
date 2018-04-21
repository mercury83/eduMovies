import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesFilterPipe } from './movies/movies-filter.pipe';
import { MoviesService } from './movies/movies.service';

@NgModule({
  declarations: [AppComponent, MoviesListComponent, MoviesFilterPipe],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
