import { Component } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../models/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {

  heroes = HEROES;
  selectedHero?: Hero

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}
