/**
 * Created by johnny on 8/2/16.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Hero } from '../models/Hero';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) { }

  search(term: string){
    return this.http
      .get(`app/heroes/?name=${term}+`)
      .map((r: Response) => r.json().data as Hero[]);
  }


}
