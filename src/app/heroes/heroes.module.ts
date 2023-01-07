import { HeroesRoutingModule } from './heroes-routing.module';
import { FormsModule } from '@angular/forms';
import { HeroesComponent } from './components/heroes/heroes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailHeroComponent } from './components/detailHero/detailHero.component';
import { MaterialModule } from '../material/material.module';
import { DashboardModule } from '../dashboard/dashboard.module';



@NgModule({
  declarations: [HeroesComponent, DetailHeroComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
