import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { NgJointModule, ShapesAngularModule } from '@dgwnu/ng-joint';

import { ShapesAngularExamplesComponent } from './shapes-angular-examples.component';
import { ShapesAngularExamplesRoutingModule } from './shapes-angular-examples-routing.module';

@NgModule({
  declarations: [
    ShapesAngularExamplesComponent
  ],
  imports: [
    CommonModule,
    NgJointModule, ShapesAngularModule,
    MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule,
    ShapesAngularExamplesRoutingModule
  ],
  exports: [
    ShapesAngularExamplesRoutingModule, ShapesAngularExamplesComponent
  ]
})
export class ShapesAngularExamplesModule { }
