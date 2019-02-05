import { NgModule } from '@angular/core';

import { UmlImplementationService } from './uml-implementation.service';
import { UmlImplementationComponent } from './uml-implementation.component';

@NgModule({
  providers: [ UmlImplementationService ],
  declarations: [ UmlImplementationComponent ],
  exports: [ UmlImplementationComponent ]
})
export class UmlImplementationModule { }
