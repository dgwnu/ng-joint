import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShapesStandardExamplesComponent } from './shapes-standard-examples.component';

@NgModule({
  declarations: [
    ShapesStandardExamplesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShapesStandardExamplesComponent
  ]
})
export class ShapesStandardExamplesModule { }
