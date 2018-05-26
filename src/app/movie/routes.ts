import {Routes} from '@angular/router';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {MovieAddComponent} from './movie-add/movie-add.component';

export const movieRoutes: Routes = [
  {
    path: 'movies/add', component: MovieAddComponent
  },
  {
    path: 'movies/:title', component: MovieDetailsComponent
  }
];
