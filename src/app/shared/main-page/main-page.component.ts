import { Component, OnInit } from '@angular/core';
import {Movie} from '../../movie/movie.model';
import {MovieService} from '../../movie/movie.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  movies: Movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getRandomMovies().subscribe(
      (movies: Movie[]) => this.movies = movies
    );
  }

}
