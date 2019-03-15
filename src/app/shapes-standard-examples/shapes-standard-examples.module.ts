import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgJointModule, ShapesStandardModule } from '@dgwnu/ng-joint';

import { CodeExampleViewerModule } from '../code-example-viewer';
import { HowToUseDocModule } from '../how-to-use-doc';
import { ShapesStandardExamplesComponent } from './shapes-standard-examples.component';
import { StandardElementsModule } from './standard-elements';
import {
  StandardLinksComponent,
  StandardLinksCodeExample01Component
} from './standard-links';
import { ShapesStandardExamplesRoutingModule } from './shapes-standard-examples-routing.module';

@NgModule({
  declarations: [
    ShapesStandardExamplesComponent,
    StandardLinksComponent,
    StandardLinksCodeExample01Component
  ],
  imports: [
    CommonModule,
    NgJointModule, ShapesStandardModule,
    CodeExampleViewerModule, HowToUseDocModule,
    StandardElementsModule,
    ShapesStandardExamplesRoutingModule
  ],
  exports: [
    ShapesStandardExamplesRoutingModule
  ]
})
export class ShapesStandardExamplesModule { }
