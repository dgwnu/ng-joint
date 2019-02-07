import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocsComponent } from './docs.component';

const demoModuleRoutes: Routes = [
  { path: 'docs',   component: DocsComponent }
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
export class DocsRoutingModule { }
