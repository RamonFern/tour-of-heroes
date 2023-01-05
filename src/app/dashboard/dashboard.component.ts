import { HeroService } from '../core/services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../core/models/hero.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  longText = `The Shiba Inu is the smallest of the six that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((h) => {
      this.heroes = h.slice(1, 5);
    })
  }

}
