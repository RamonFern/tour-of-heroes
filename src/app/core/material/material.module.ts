import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

const MODULES = [
  BrowserAnimationsModule,
  MatToolbarModule,
  MatIconModule,
  MatExpansionModule,
  MatTooltipModule,
  MatCardModule,
  MatChipsModule,
  MatInputModule,
  MatTableModule,
  MatFormFieldModule,
  MatButtonModule,
  MatListModule,
]


@NgModule({
  imports: [MODULES],
  exports: [MODULES]
})
export class MaterialModule { }
