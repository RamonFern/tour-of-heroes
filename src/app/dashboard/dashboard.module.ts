import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, MaterialModule, DashboardRoutingModule
  ]
})
export class DashboardModule { }
