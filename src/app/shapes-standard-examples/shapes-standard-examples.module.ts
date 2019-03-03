import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShapesStandardExamplesComponent } from './shapes-standard-examples.component';
import { ShapesStandardExamplesRoutingModule } from './shapes-standard-examples-routing.module';
import { StandardElementsComponent } from './standard-elements';
import { StandardLinksComponent } from './standard-links';

@NgModule({
  declarations: [
    ShapesStandardExamplesComponent,
    StandardElementsComponent,
    StandardLinksComponent
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
