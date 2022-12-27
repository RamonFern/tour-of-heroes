import { MessagesService } from './messages.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROES } from './mock-heroes';
import { Hero } from './models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
