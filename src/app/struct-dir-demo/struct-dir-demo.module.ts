import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule } from '@angular/material';

import { NgJointModule, ShapesStandardModule, ShapesAngularModule } from '@dgwnu/ng-joint';

import { StructDirDemoComponent } from './struct-dir-demo.component';
import { StructDirDemoRoutingModule } from './struct-dir-demo-routing.module';
import { BiDirBindNgElementExampleComponent } from './bi-dir-bind-ng-element-example.component';
import { BiDirBindStandardShapesExampleComponent } from './bi-dir-bind-standard-shapes-example.component'; 

@NgModule({
  declarations: [
    StructDirDemoComponent,
    BiDirBindNgElementExampleComponent,
    BiDirBindStandardShapesExampleComponent
  ],
  imports: [
    CommonModule, NgJointModule, ShapesStandardModule, ShapesAngularModule,
    MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTabsModule,
    StructDirDemoRoutingModule
  ],
  exports: [ StructDirDemoComponent ]
})
export class StructDirDemoModule { }
