import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShapesStandardExamplesComponent } from './shapes-standard-examples.component';
import { ShapesStandardExamplesRoutingModule } from './shapes-standard-examples-routing.module';

@NgModule({
  declarations: [
    ShapesStandardExamplesComponent
  ],
  imports: [
    CommonModule,
    ShapesStandardExamplesRoutingModule
  ],
  exports: [
    ShapesStandardExamplesRoutingModule
  ]
})
export class ShapesStandardExamplesModule { }
