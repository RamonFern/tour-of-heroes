import { HeroService } from '../core/services/hero.service';
import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../core/models/hero.model';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-detailHero',
  templateUrl: './detailHero.component.html',
  styleUrls: ['./detailHero.component.css']
})
export class DetailHeroComponent implements OnInit {

  hero!: Hero;
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  constructor(private heroService: HeroService,
              private location: Location,
              private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.heroService.getHero(id).subscribe(hero => {
      this.hero = hero;
    })
  }

  goBack() {
    this.location.back();
  }
}
