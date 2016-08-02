import { Component, OnInit } from '@angular/core';

import { Hero } from './../models/Hero';
import { HeroService } from './../services/hero.service';
import { Router } from '@angular/router';
import { HeroSearchComponent } from './hero-search.component';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css'],
    directives: [HeroSearchComponent]
})
export class DashboardComponent implements OnInit {

    title: string = 'Top Heroes';

    heroes: Hero[];

    constructor(
      private heroService: HeroService,
      private router: Router
    ) { }

    ngOnInit() {

      this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0,4))

    }

    goToDetail(hero: Hero) {
      let link = ['/detail', hero.id];
      this.router.navigate(link);
    }

}
