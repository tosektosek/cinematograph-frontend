import {Movie} from '../movie/movie.model';

export class Director {
  constructor(public id: number, public firstName: string,
              public lastName: string, public imgURL: string, public movies: Movie[]) {}
}
