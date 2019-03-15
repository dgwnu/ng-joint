import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgJointModule, ShapesStandardModule } from '@dgwnu/ng-joint';

import { CodeExampleViewerModule } from '../../code-example-viewer';
import { HowToUseDocModule } from '../../how-to-use-doc';
import { StandardLinksComponent } from './standard-links.component';
import { StandardLinksCodeExample01Component } from './standard-links-code-example01';

@NgModule({
    declarations: [
        StandardLinksComponent,
        StandardLinksCodeExample01Component
    ],
    imports: [
      CommonModule,
      NgJointModule, ShapesStandardModule,
      CodeExampleViewerModule, HowToUseDocModule,
    ],
    exports: [
    ]
})
export class StandardLinksModule { }
