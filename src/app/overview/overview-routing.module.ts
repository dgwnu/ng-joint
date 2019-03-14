import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview.component';

const overviewModuleRoutes: Routes = [
  { path: 'overview', component: OverviewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(overviewModuleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OverviewRoutingModule { }
