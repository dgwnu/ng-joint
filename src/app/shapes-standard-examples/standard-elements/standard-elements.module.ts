import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgJointModule, ShapesStandardModule } from '@dgwnu/ng-joint';

import { CodeExampleViewerModule } from '../../code-example-viewer';
import { HowToUseDocModule } from '../../how-to-use-doc';
import { StandardElementsComponent } from './standard-elements.component';
import { StandardElementsCodeExample01Component } from './standard-elements-code-example01';

@NgModule({
    declarations: [
        StandardElementsComponent,
        StandardElementsCodeExample01Component
    ],
    imports: [
      CommonModule,
      NgJointModule, ShapesStandardModule,
      CodeExampleViewerModule, HowToUseDocModule,
    ],
    exports: [
    ]
})
export class StandardElementsModule { }
