import { NgModule } from '@angular/core';

import { UmlAbstractService } from './uml-abstract.service';
import { UmlAbstractComponent } from './uml-abstract.component';

@NgModule({
  providers: [ UmlAbstractService ],
  declarations: [ UmlAbstractComponent ],
  exports: [ UmlAbstractComponent ]
})
export class UmlAbstractModule { }
