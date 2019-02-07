import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShapesUmlExamplesComponent } from './shapes-uml-examples.component';

const demoModuleRoutes: Routes = [
  { path: 'shapes-uml-examples',   component: ShapesUmlExamplesComponent }
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
export class ShapesUmlExamplesRoutingModule { }
