import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../movie.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  constructor(private movieService: MovieService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.movieService.getMovieByTitle(this.route.snapshot.params['title']).subscribe(
      (movie: Movie) => this.movie = movie);
  }

}
