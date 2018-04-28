import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicGridComponent } from './music/music-grid/music-grid.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'music',
    component: MusicGridComponent
  },
  {
    path: 'movies',
    component: MoviesListComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
