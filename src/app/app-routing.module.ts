import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ShapesAngularExamplesComponent,
  AngularBiDirBindComponent,
  AngularTemplateOnlyComponent,
  ShapesAngularExamplesModule
} from './shapes-angular-examples';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'shapes-angular-examples', component: ShapesAngularExamplesComponent },
  { path: 'shapes-angular-examples/angular-template-only', component: AngularTemplateOnlyComponent },
  { path: 'shapes-angular-examples/angular-bi-dir-bind', component: AngularBiDirBindComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [
    ShapesAngularExamplesModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    ShapesAngularExamplesModule,
    RouterModule
  ]
})
export class AppRoutingModule {}

/*
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
*/
