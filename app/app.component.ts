import { Component } from '@angular/core';

import {HeroesComponent} from './components/HeroesComponent.component';
import {HeroService} from './services/hero.service';

@Component({
    selector: 'ng2-tower-of-heroes',
    template: `<h1>Tower of Heroes </h1>
                <hero-list></hero-list>`,
    directives: [HeroesComponent],
    providers: [HeroService]
})
export class AppComponent { }
