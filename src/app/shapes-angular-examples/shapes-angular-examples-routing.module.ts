import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShapesAngularExamplesComponent } from './shapes-angular-examples.component';
import { AngularTemplateOnlyComponent } from './angular-template-only/angular-template-only.component';
import { AngularBiDirBindComponent } from './angular-bi-dir-bind/angular-bi-dir-bind.component';

export const shapeAngularExamplesModuleRoutes: Routes = [
  {
    path: 'shapes-angular-examples',
    component: ShapesAngularExamplesComponent,
    children: [
      {
        path: 'angular-template-only',
        component: AngularTemplateOnlyComponent 
      },
      {
        path: 'angular-bi-dir-bind',
        component: AngularBiDirBindComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      shapeAngularExamplesModuleRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class ShapesAngularExamplesRoutingModule { }
