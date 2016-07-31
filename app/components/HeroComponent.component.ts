/**
 * Created by johnny on 7/31/16.
 */
import { Component, OnInit, Input } from '@angular/core';
import {Hero} from "./../models/Hero";

@Component({
    moduleId: module.id,
    selector: 'hero-details',
    templateUrl: 'HeroComponent.component.html'
})



export class HeroComponent implements OnInit {

    @Input()
    hero: Hero;

    constructor() { }

    ngOnInit() { }

}
