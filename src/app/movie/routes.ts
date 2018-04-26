import {Routes} from '@angular/router';
import {MovieComponent} from './movie/movie.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';

export const movieRoutes: Routes = [
  {
    path: 'movie', component: MovieComponent
  },
  {
    path: 'movie/:title', component: MovieDetailsComponent
  },
  {
    path: '', redirectTo: '/movie', pathMatch: 'full'
  }
];
