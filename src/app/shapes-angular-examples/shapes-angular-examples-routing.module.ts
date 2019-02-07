import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShapesAngularExamplesComponent } from './shapes-angular-examples.component';
import { AngularElementTemplateOnlyComponent } from './angular-element-template-only/angular-element-template-only.component';
import { AngularElementBiDirBindComponent } from './angular-element-bi-dir-bind/angular-element-bi-dir-bind.component';

export const routePath = {
  templateOnly: 'angular-element-template-only',
  biDirBind: 'angular-element-bi-dir-bind'
};

const demoModuleRoutes: Routes = [
  { path: 'shapes-angular-examples', component: ShapesAngularExamplesComponent },
  { path: routePath.templateOnly, component: AngularElementTemplateOnlyComponent },
  { path: routePath.biDirBind, component: AngularElementBiDirBindComponent }
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
