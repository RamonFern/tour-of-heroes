import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailHeroComponent } from './components/detailHero/detailHero.component';
import { HeroesComponent } from './components/heroes/heroes.component';


const routes: Routes = [
  { path: 'heroes/:id', component: DetailHeroComponent },
  { path: 'heroes', component: HeroesComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
