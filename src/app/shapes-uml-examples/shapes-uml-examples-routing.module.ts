import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShapesUmlExamplesComponent } from './shapes-uml-examples.component';
import { UmlClassDiagramComponent } from './uml-class-diagram';

const demoModuleRoutes: Routes = [
  { path: 'shapes-uml-examples', component: ShapesUmlExamplesComponent,
      children: [
        { path: 'uml-class-diagram', component: UmlClassDiagramComponent }
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      demoModuleRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ShapesUmlExamplesRoutingModule { }
