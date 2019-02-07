import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShapesUmlExamplesComponent } from './shapes-uml-examples.component';
import { ShapesUmlExamplesRoutingModule } from './shapes-uml-examples-routing.module';

@NgModule({
  declarations: [
    ShapesUmlExamplesComponent
  ],
  imports: [
    CommonModule,
    ShapesUmlExamplesRoutingModule
  ],
  exports: [
    ShapesUmlExamplesRoutingModule
  ]
})
export class ShapesUmlExamplesModule { }
