import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShapesStandardExamplesComponent } from './shapes-standard-examples.component';
import { StandardElementsComponent } from './standard-elements';
import { StandardLinksComponent } from './standard-links';

const demoModuleRoutes: Routes = [
  { path: 'shapes-standard-examples', component: ShapesStandardExamplesComponent,
      children: [
        { path: 'standard-elements', component: StandardElementsComponent },
        { path: 'standard-links', component: StandardLinksComponent }
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
export class ShapesStandardExamplesRoutingModule { }
