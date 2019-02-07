import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UmlClassDiagramDemoComponent } from './uml-class-diagram-demo.component';

const demoModuleRoutes: Routes = [
  { path: 'uml-class-diagram-demo',   component: UmlClassDiagramDemoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      demoModuleRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class UmlClassDiagramDemoRoutingModule { }
