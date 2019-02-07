import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShapesUmlExamplesComponent } from './shapes-uml-examples.component';

@NgModule({
  declarations: [
    ShapesUmlExamplesComponent
  ],
  imports: [
    CommonModule,
    ShapesUmlExamplesComponent
  ],
  exports: [
    ShapesUmlExamplesComponent
  ]
})
export class ShapesUmlExamplesModule { }
