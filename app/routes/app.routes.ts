/**
 * Created by johnny on 7/31/16.
 */
import { provideRouter, RouterConfig } from '@angular/router';
import { HeroesComponent } from './../components/HeroesComponent.component';
import {DashboardComponent} from "../components/dashboard.component";
import {HeroComponent} from "../components/HeroComponent.component";

const ROUTES: RouterConfig = [
  {
    path:'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HeroComponent
  }
];

export const appRouterProviders = [
  provideRouter(ROUTES)
];
