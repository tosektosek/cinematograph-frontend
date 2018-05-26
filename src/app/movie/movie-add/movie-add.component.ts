import {Component, OnInit, ViewChild} from '@angular/core';
import {Movie} from '../movie.model';
import {MovieService} from '../movie.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {

  movie: Movie = new Movie();
  genreInput = '';

  constructor(private movieService: MovieService,
              private router: Router) {
  }

  ngOnInit() {
  }

  addMovie() {
    const genres: string[] = this.genreInput.split(', ');
    this.movie.genres = [];
    genres.forEach(value => this.movie.genres.push(value));
    this.movieService.saveMovie(this.movie).subscribe();
    this.router.navigate(['/']);
  }

}
