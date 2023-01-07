import { CommonModule } from '@angular/common';
import { MessagesComponent } from './components/messages/messages.component';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

const COMPONENTS = [
  MessagesComponent,
  ToolbarComponent
]

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MaterialModule],
  exports: [COMPONENTS,MaterialModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if(parentModule) {
      throw new Error('CoreModule has already been loaded. import this module in the app Module.')
    };
  }
}
