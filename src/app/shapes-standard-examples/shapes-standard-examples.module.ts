import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgJointModule, ShapesStandardModule } from '@dgwnu/ng-joint';

import { CodeExampleViewerModule } from '../code-example-viewer';
import { HowToUseDocModule } from '../how-to-use-doc';
import { ShapesStandardExamplesComponent } from './shapes-standard-examples.component';
import { StandardElementsModule } from './standard-elements';
import { StandardLinksModule } from './standard-links';
import { ShapesStandardExamplesRoutingModule } from './shapes-standard-examples-routing.module';

@NgModule({
  declarations: [
    ShapesStandardExamplesComponent
  ],
  imports: [
    CommonModule,
    NgJointModule, ShapesStandardModule,
    CodeExampleViewerModule, HowToUseDocModule,
    StandardElementsModule, StandardLinksModule,
    ShapesStandardExamplesRoutingModule
  ],
  exports: [
    ShapesStandardExamplesRoutingModule
  ]
})
export class ShapesStandardExamplesModule { }
