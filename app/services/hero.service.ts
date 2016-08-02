/**
 * Created by johnny on 7/31/16.
 */
import { Hero } from '../models/Hero';
import { HEROES } from '../mocks/heroes';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  private heroesUrl = 'app/heroes';


  constructor(private http: Http){

  }

  getHeroes() {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError)
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


  //add new hero
  private post(hero: Hero): Promise<Hero> {
    let headers = new Headers ({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError)
  }


  //Update existing hero
  private put(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http.put(url, JSON.stringify(hero), {headers: headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);

  }

  //Delete Hero

  delete(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroesUrl}/${hero.id}`;

    return this.http.delete(url, {headers: headers})
      .toPromise()
      .catch(this.handleError)

  }

  //exposed implementation of put and add
  save(hero: Hero): Promise<Hero>{
    if(hero.id){
      return this.put(hero);
    }

    return this.post(hero);
  }

  // See the "Take it slow" appendix
  getHeroesSlowly() {
    return new Promise<Hero[]>(resolve =>
      setTimeout(() => resolve(HEROES), 2000) // 2 seconds
    );
  }

  getHero(id: number) {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
