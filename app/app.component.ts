import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {HeroService} from './services/hero.service';


@Component({
    moduleId: module.id,
    selector: 'ng2-tower-of-heroes',
    template: `<h1>{{title}}</h1>
                <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
                <a [routerLink]="['/heroes']">Heroes</a>
                <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES],
    styleUrls: ['styles.css'],
    providers: [HeroService]
})
export class AppComponent {
  title: string = "Tower of Heroes"
}
