/**
 * Created by johnny on 7/31/16.
 */
import { Component, OnInit} from '@angular/core';

import { HeroService } from './../services/hero.service';
import { HeroComponent} from './HeroComponent.component';
import { Hero } from './../models/Hero';
import {  Router } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'hero-list',
    templateUrl: 'HeroesComponent.component.html',
    styleUrls: ['HeroesComponent.component.css'],
    directives: [HeroComponent]
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;
    addingHero = false;
    error: any;

    constructor(
      private heroService: HeroService,
      private router: Router
    ) { }

    selectHero(hero: Hero){
      this.selectedHero = hero;
    }

    ngOnInit() {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    goToDetail() {
      let link = ['/detail', this.selectedHero.id];
      this.router.navigate(link);
    }

  getHeroes() {
    this.heroService
      .getHeroes()
      .then(heroes => this.heroes = heroes)
      .catch(error => this.error = error);
  }

    addHero(){
      this.addingHero = true;
      this.selectedHero = null;
    }

    close(savedHero: Hero) {
      this.addingHero = false;
      if( savedHero ) { this.getHeroes(); }
    }

  deleteHero(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService
      .delete(hero)
      .then(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
      .catch(error => this.error = error);
  }
}
