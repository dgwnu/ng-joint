import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const demoModuleRoutes: Routes = [
  { path: 'page-not-found', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(demoModuleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageNotFoundRoutingModule { }
