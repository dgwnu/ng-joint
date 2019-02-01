import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { NgJointModule, ShapesStandardModule, ShapesAngularModule } from '@dgwnu/ng-joint';

import { StructDirDemoComponent } from './struct-dir-demo.component';

@NgModule({
  declarations: [ StructDirDemoComponent ],
  imports: [ 
    CommonModule, NgJointModule, ShapesStandardModule, ShapesAngularModule,
    MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule
  ],
  exports: [ StructDirDemoComponent ]
})
export class StructDirDemoModule { }
