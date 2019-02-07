import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShapesAngularExamplesComponent } from './shapes-angular-examples.component';

const demoModuleRoutes: Routes = [
  { path: 'shapes-angular-examples',   component: ShapesAngularExamplesComponent }
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
export class ShapesAngularExamplesRoutingModule { }
