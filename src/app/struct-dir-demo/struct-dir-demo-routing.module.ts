import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StructDirDemoComponent } from './struct-dir-demo.component';

const demoModuleRoutes: Routes = [
  { path: 'struct-dir-demo',   component: StructDirDemoComponent }
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
export class StructDirDemoRoutingModule { }
