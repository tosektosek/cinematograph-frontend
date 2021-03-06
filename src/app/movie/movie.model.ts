import {Director} from '../director/director.model';
import {Actor} from '../actor/actor.model';
import {Writer} from '../writer/writer.model';

export class Movie {
  public id: string;
  public title: string;
  public genres: string[];
  public releaseDate: any;
  public imgURL: string;
  public visuallEffectsMark: number;
  public actingMark: number;
  public  plotMark: number;
  public musicMark: number;
  public mark: number;
  public actors: Actor[];
  public directors: Director[];
  public writers: Writer[];
  constructor () {

  }
}
