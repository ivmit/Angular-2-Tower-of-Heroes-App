/**
 * Created by johnny on 7/31/16.
 */
import { Component, EventEmitter, Input, OnInit, OnDestroy, Output} from '@angular/core';
import { Hero } from "./../models/Hero";
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service'

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'HeroComponent.component.html',
    styleUrls: ['HeroComponent.component.css']
})



export class HeroComponent implements OnInit, OnDestroy {

    @Input() hero: Hero;
    @Output() close= new EventEmitter();

    error: any;
    sub: any;
    navigated: boolean = false;

    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute
    ) { }

    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        if (params['id'] !== undefined) {
          let id = +params['id'];
          this.navigated = true;
          this.heroService.getHero(id)
            .then(hero => this.hero = hero);
        } else {
          this.navigated = false;
          this.hero = new Hero();
        }

      });

    }

    save() {
      this.heroService
        .save(this.hero)
        .then(hero => {
          this.hero = hero;
          this.goBack(hero);
        })
        .catch(error => this.error = error)

    }

    ngOnDestroy(){
      this.sub.unsubscribe();
    }

    goBack(savedHero: Hero = null){
      this.close.emit(savedHero); //HeroesComponent will listen for update and refresh the list
      if(this.navigated){
        window.history.back();
      }
    }
}
