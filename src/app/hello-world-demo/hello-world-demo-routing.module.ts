import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloWorldDemoComponent } from './hello-world-demo.component';

const demoModuleRoutes: Routes = [
  { path: 'hello-world-demo',   component: HelloWorldDemoComponent }
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
export class HelloWorldDemoRoutingModule { }
