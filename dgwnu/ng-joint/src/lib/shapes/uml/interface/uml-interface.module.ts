import { NgModule } from '@angular/core';

import { UmlInterfaceService } from './uml-interface.service';
import { UmlInterfaceComponent } from './uml-interface.component';

@NgModule({
  providers: [ UmlInterfaceService ],
  declarations: [ UmlInterfaceComponent ],
  exports: [ UmlInterfaceComponent ]
})
export class UmlInterfaceModule { }
