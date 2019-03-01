import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatSidenavModule } from '@angular/material';

import { NgJointModule, ShapesAngularModule } from '@dgwnu/ng-joint';

import { ShapesAngularExamplesComponent } from './shapes-angular-examples.component';
import { AngularTemplateOnlyComponent } from './angular-template-only/angular-template-only.component';
import { AngularBiDirBindComponent } from './angular-bi-dir-bind/angular-bi-dir-bind.component';

@NgModule({
  declarations: [
    ShapesAngularExamplesComponent,
    AngularTemplateOnlyComponent,
    AngularBiDirBindComponent
  ],
  imports: [
    // import to use structural directives
    CommonModule,
    // imports to use ng-joint shapes angular components
    NgJointModule, ShapesAngularModule,
    // imports to use some angular material components
    MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatSidenavModule
  ],
  exports: [
    ShapesAngularExamplesComponent,
    AngularTemplateOnlyComponent,
    AngularBiDirBindComponent
  ]
})
export class ShapesAngularExamplesModule { }
