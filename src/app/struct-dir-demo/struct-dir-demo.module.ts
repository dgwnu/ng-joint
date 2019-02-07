import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { NgJointModule, ShapesStandardModule, ShapesAngularModule } from '@dgwnu/ng-joint';

import { StructDirDemoComponent } from './struct-dir-demo.component';
import { StructDirDemoRoutingModule } from './struct-dir-demo-routing.module'; 

@NgModule({
  declarations: [ StructDirDemoComponent ],
  imports: [
    CommonModule, NgJointModule, ShapesStandardModule, ShapesAngularModule,
    MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule,
    StructDirDemoRoutingModule
  ],
  exports: [ StructDirDemoComponent ]
})
export class StructDirDemoModule { }
