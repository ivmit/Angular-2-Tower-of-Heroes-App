/**
 * Created by johnny on 7/31/16.
 */
import { Injectable } from '@angular/core';

import { HEROES } from './../mocks/heroes';

@Injectable()
export class HeroService {

    getHeroes(){
      return Promise.resolve(HEROES);
    }

}
