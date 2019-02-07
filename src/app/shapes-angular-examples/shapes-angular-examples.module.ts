import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShapesAngularExamplesComponent } from './shapes-angular-examples.component';
import { ShapesAngularExamplesRoutingModule } from './shapes-angular-examples-routing.module';

@NgModule({
  declarations: [
    ShapesAngularExamplesComponent
  ],
  imports: [
    CommonModule,
    ShapesAngularExamplesRoutingModule
  ],
  exports: [
    ShapesAngularExamplesRoutingModule
  ]
})
export class ShapesAngularExamplesModule { }
