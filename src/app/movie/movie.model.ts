import {Director} from '../director/director.model';
import {Actor} from '../actor/actor.model';
import {Writer} from '../writer/writer.model';

export class Movie {

  constructor (public id: number, public title: String, public genres: String[],
               public releaseDate: any, public imgURL: String,
               public visuallEffectsMark: number, public actingMark: number,
               public  plotMark: number, public musicMark: number, public mark: number,
               public actors: Actor[], public directors: Director[],
               public writers: Writer[]) {
  }
}
