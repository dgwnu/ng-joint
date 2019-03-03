import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OverviewComponent } from './overview.component';
import { IntroComponent } from './intro';
import { QuickstartComponent } from './quickstart';

const demoModuleRoutes: Routes = [
  { path: 'overview', component: OverviewComponent,
      children: [
        { path: 'intro', component: IntroComponent },
        { path: 'quickstart', component: QuickstartComponent }
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
export class OverviewRoutingModule { }
