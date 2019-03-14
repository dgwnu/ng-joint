import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HowToUseDocOverviewComponent } from './how-to-use-doc-overview';
import { HowToUseDocApiComponent } from './how-to-use-doc-api';
import { HowToUseDocExamplesComponent } from './how-to-use-doc-examples';

const howToUseDocModuleRoutes: Routes = [
  { path: 'how-to-use-doc-overview', component: HowToUseDocOverviewComponent },
  { path: 'how-to-use-doc-api', component: HowToUseDocApiComponent },
  { path: 'how-to-use-doc-examples', component: HowToUseDocExamplesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(howToUseDocModuleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HowToUseDocRoutingModule { }
