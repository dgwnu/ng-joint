import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgJointModule, ShapesUmlModule } from '@dgwnu/ng-joint';

import { ShapesUmlExamplesRoutingModule } from './shapes-uml-examples-routing.module';
import { ShapesUmlExamplesComponent } from './shapes-uml-examples.component';
import { UmlClassDiagramComponent } from './uml-class-diagram';

@NgModule({
  declarations: [
    ShapesUmlExamplesComponent,
    UmlClassDiagramComponent
  ],
  imports: [
    CommonModule,
    NgJointModule, ShapesUmlModule,
    ShapesUmlExamplesRoutingModule,
  ],
  exports: [
    ShapesUmlExamplesRoutingModule
  ]
})
export class ShapesUmlExamplesModule { }
