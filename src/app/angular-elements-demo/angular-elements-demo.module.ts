import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { NgJointModule, ShapesAngularModule } from '@dgwnu/ng-joint';

import { AngularElementsDemoComponent } from './angular-elements-demo.component';
import { AngularElementsDemoRoutingModule } from './angular-elements-demo-routing.module';

@NgModule({
  declarations: [ AngularElementsDemoComponent ],
  imports: [
    NgJointModule, ShapesAngularModule,
    MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule,
    AngularElementsDemoRoutingModule
  ],
  exports: [ AngularElementsDemoComponent, AngularElementsDemoRoutingModule ]
})
export class AngularElementsDemoModule { }
