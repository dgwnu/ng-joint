import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    CommonModule, HttpClientModule,
    FlexLayoutModule,
    MatExpansionModule,
    NgJointModule, ShapesUmlModule,
    ShapesUmlExamplesRoutingModule,
  ],
  exports: [
    ShapesUmlExamplesRoutingModule
  ]
})
export class ShapesUmlExamplesModule { }
