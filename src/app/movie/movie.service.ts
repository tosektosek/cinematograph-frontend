import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Movie} from './movie.model';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  private path = '/server/movie';
  getMovieByTitle(title: String) {
    return this.http.get(this.path + '/' + title);
  }

  saveMovie(movie: Movie) {
    return this.http.post(this.path, movie);
  }

  getRandomMovies() {
    return this.http.get(this.path + '/random');
  }
}
