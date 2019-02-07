import { NgModule } from '@angular/core';

import { NgJointModule, ShapesStandardModule } from '@dgwnu/ng-joint';

import { HelloWorldDemoComponent } from './hello-world-demo.component';
import { HelloWorldDemoRoutingModule } from './hello-world-demo-routing.module';

@NgModule({
  declarations: [ HelloWorldDemoComponent ],
  imports: [ NgJointModule, ShapesStandardModule,
    HelloWorldDemoRoutingModule
  ],
  exports: [ HelloWorldDemoComponent, HelloWorldDemoRoutingModule ]
})
export class HelloWorldDemoModule { }
