import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  private path: String = '/movie';
  getMovieByTitle(title: String) {
    return this.http.get(this.path + '/' + title);
  }
}
