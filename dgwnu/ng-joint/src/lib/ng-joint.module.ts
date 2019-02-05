import { NgModule } from '@angular/core';

import {  NgJointService } from './ng-joint.service';
import { DiaModule } from './dia/dia.module';
import { ShapesModule } from './shapes/shapes.module';

@NgModule({
  providers: [ NgJointService ],
  imports: [ DiaModule, ShapesModule ],
  exports: [ DiaModule, ShapesModule ]
})
export class NgJointModule { }
