import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatSidenavModule } from '@angular/material';

import { NgJointModule, ShapesAngularModule } from '@dgwnu/ng-joint';

import { ShapesAngularExamplesComponent } from './shapes-angular-examples.component';
import { AngularTemplateOnlyComponent } from './angular-template-only/angular-template-only.component';
import { AngularBiDirBindComponent } from './angular-bi-dir-bind/angular-bi-dir-bind.component';
import { ShapesAngularExamplesRoutingModule } from './shapes-angular-examples-routing.module';

@NgModule({
  declarations: [
    ShapesAngularExamplesComponent,
    AngularTemplateOnlyComponent,
    AngularBiDirBindComponent
  ],
  imports: [
    CommonModule, ShapesAngularExamplesRoutingModule,
    NgJointModule, ShapesAngularModule,
    MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule, MatSidenavModule
  ],
  exports: [
    ShapesAngularExamplesRoutingModule,
    ShapesAngularExamplesComponent,
    AngularTemplateOnlyComponent,
    AngularBiDirBindComponent
  ]
})
export class ShapesAngularExamplesModule { }
