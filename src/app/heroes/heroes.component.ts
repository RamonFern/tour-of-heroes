import { HeroService } from '../core/services/hero.service';
import { Hero } from '../core/models/hero.model';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}


  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes()
        .pipe(take(1))
        .subscribe((heroes) => {
          this.heroes = heroes;
        })
  }



}
