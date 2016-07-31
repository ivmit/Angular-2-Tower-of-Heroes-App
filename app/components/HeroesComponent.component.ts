/**
 * Created by johnny on 7/31/16.
 */
import { Component, OnInit} from '@angular/core';

import { HeroService } from './../services/hero.service';
import { Hero } from './../models/Hero';
import {HeroComponent} from './../components/HeroComponent.component';

@Component({
    moduleId: module.id,
    selector: 'hero-list',
    templateUrl: 'HeroesComponent.component.html',
    styleUrls: ['HeroesComponent.component.css'],
    directives: [HeroComponent]
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero[];

    constructor(private heroService: HeroService) { }

    selectHero(hero: Hero[]){
      this.selectedHero = hero;
    }

    ngOnInit() {
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

}
