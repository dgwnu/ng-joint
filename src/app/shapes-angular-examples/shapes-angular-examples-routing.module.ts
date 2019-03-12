import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShapesAngularExamplesComponent } from './shapes-angular-examples.component';
import { AngularTemplateOnlyComponent } from './angular-template-only';
import { AngularBiDirBindComponent } from './angular-bi-dir-bind';

const demoModuleRoutes: Routes = [
  { path: 'shapes-angular-examples', component: ShapesAngularExamplesComponent,
      children: [
        { path: 'angular-template-only', component: AngularTemplateOnlyComponent },
        { path: 'angular-bi-dir-bind', component: AngularBiDirBindComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(demoModuleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShapesAngularExamplesRoutingModule { }
