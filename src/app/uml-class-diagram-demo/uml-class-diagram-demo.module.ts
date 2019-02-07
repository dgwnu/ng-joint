import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgJointModule, ShapesUmlModule } from '@dgwnu/ng-joint';
import { UmlClassDiagramDemoComponent } from './uml-class-diagram-demo.component';
import { UmlClassDiagramDemoRoutingModule } from './uml-class-diagram-demo-routing.module';

@NgModule({
  declarations: [ UmlClassDiagramDemoComponent ],
  imports: [
    CommonModule,
    NgJointModule, ShapesUmlModule,
    UmlClassDiagramDemoRoutingModule
  ],
  exports: [ UmlClassDiagramDemoComponent, UmlClassDiagramDemoRoutingModule ]
})
export class UmlClassDiagramDemoModule { }
