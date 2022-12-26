import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../models/hero.model';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'app-detailHero',
  templateUrl: './detailHero.component.html',
  styleUrls: ['./detailHero.component.css']
})
export class DetailHeroComponent  {

  @Input() selectedHero?: Hero
}
