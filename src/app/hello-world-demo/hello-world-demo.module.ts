import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA  } from '@angular/core';

import { NgJointModule, ShapesStandardModule } from '@dgwnu/ng-joint';

import { HelloWorldDemoComponent } from './hello-world-demo.component';

@NgModule({
  declarations: [ HelloWorldDemoComponent ],
  imports: [ NgJointModule, ShapesStandardModule ],
  exports: [ HelloWorldDemoComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class HelloWorldDemoModule { }
