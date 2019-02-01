import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgJointModule, ShapesUmlModule } from '@dgwnu/ng-joint';
import { UmlClassDiagramDemoComponent } from './uml-class-diagram-demo.component';

@NgModule({
  declarations: [ UmlClassDiagramDemoComponent ],
  imports: [
    CommonModule,
    NgJointModule, ShapesUmlModule
  ],
  exports: [ UmlClassDiagramDemoComponent ]
})
export class UmlClassDiagramDemoModule { }
