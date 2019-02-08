import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShapesStandardExamplesComponent } from './shapes-standard-examples.component';

const demoModuleRoutes: Routes = [
  { path: 'shapes-standard-examples',   component: ShapesStandardExamplesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      demoModuleRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ShapesStandardExamplesRoutingModule { }
