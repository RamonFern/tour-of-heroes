import { DashboardModule } from './dashboard/dashboard.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    // @angular
    BrowserModule,
    FormsModule,

    // feature
    DashboardModule,
    HeroesModule,

    // app
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
