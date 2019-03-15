import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgJointModule, ShapesStandardModule } from '@dgwnu/ng-joint';

import { CodeExampleViewerModule } from '../code-example-viewer';
import { HowToUseDocModule } from '../how-to-use-doc';
import { ShapesStandardExamplesComponent } from './shapes-standard-examples.component';
import {
  StandardElementsComponent,
  StandardElementsCodeExample01Component
} from './standard-elements';
import { StandardLinksComponent } from './standard-links';
import { ShapesStandardExamplesRoutingModule } from './shapes-standard-examples-routing.module';
import {  } from './standard-elements/standard-elements-code-example01';


@NgModule({
  declarations: [
    ShapesStandardExamplesComponent,
    StandardElementsComponent,
    StandardElementsCodeExample01Component,
    StandardLinksComponent,
  ],
  imports: [
    CommonModule,
    NgJointModule, ShapesStandardModule,
    CodeExampleViewerModule, HowToUseDocModule,
    ShapesStandardExamplesRoutingModule
  ],
  exports: [
    ShapesStandardExamplesRoutingModule
  ]
})
export class ShapesStandardExamplesModule { }
