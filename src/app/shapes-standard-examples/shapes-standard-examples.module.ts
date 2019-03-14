import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgJointModule, ShapesStandardModule } from '@dgwnu/ng-joint';

import { HowToUseDocModule } from '../how-to-use-doc';
import { ShapesStandardExamplesComponent } from './shapes-standard-examples.component';
import { StandardElementsComponent } from './standard-elements';
import { StandardLinksComponent } from './standard-links';
import { ShapesStandardExamplesRoutingModule } from './shapes-standard-examples-routing.module';


@NgModule({
  declarations: [
    ShapesStandardExamplesComponent,
    StandardElementsComponent,
    StandardLinksComponent
  ],
  imports: [
    CommonModule,
    NgJointModule, ShapesStandardModule,
    HowToUseDocModule,
    ShapesStandardExamplesRoutingModule
  ],
  exports: [
    ShapesStandardExamplesRoutingModule
  ]
})
export class ShapesStandardExamplesModule { }
