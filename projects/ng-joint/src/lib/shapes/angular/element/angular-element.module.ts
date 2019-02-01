import { NgModule } from '@angular/core';

import { AngularElementService } from './angular-element.service';
import {  AngularElementComponent } from './angular-element.component';

@NgModule({
  providers: [ AngularElementService ],
  declarations: [ AngularElementComponent ],
  exports: [ AngularElementComponent ]
})
export class AngularElementModule { }
