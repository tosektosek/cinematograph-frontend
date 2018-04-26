import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import {Movie} from '../movie.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  title: String = '';
  constructor() { }

  ngOnInit() {
  }

}
