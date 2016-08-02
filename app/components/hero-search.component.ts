/**
 * Created by johnny on 8/2/16.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/Subject';

import { HeroSearchService } from './hero-search.service';
import { Hero } from '../models/Hero';

@Component({
  moduleId: module.id,
  selector: 'hero-search',
  templateUrl: 'herosearch.component.html',
  providers:[HeroSearchService],
  styleUrls:['herosearch.css']
})

export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  searchSubject = new Subject<string>();

  constructor(
    private heroSearchService: HeroSearchService,
    private router: Router
  ){}


  //push a search term in the observable stream.
  search(term: string) {
    this.searchSubject.next(term);
  }

  //Push a search term into the observable stream.
  ngOnInit(){
    this.heroes = this.searchSubject.asObservable() //cast as Observable
      .debounceTime(300) //wait for 300ms pause in events
      .distinctUntilChanged() //ignore if next search term is same as previous
      .switchMap(term => term //switch to new observable each time
        ? this.heroSearchService.search(term)
        : Observable.of<Hero[]>([]))
      .catch(error =>
        {
          console.log(error);
          return Observable.of<Hero[]>([]);
        }
      )
  }

  goToDetail(hero: Hero) {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }


}
