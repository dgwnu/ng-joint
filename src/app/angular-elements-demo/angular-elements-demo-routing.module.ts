import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularElementsDemoComponent } from './angular-elements-demo.component';

const demoModuleRoutes: Routes = [
  { path: 'angular-elements-demo',   component: AngularElementsDemoComponent }
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
export class AngularElementsDemoRoutingModule {}
