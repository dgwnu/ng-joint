import { NgModule } from '@angular/core';

import { UmlClassService } from './uml-class.service';
import { UmlClassComponent } from './uml-class.component';

@NgModule({
  providers: [ UmlClassService ],
  declarations: [UmlClassComponent],
  exports: [ UmlClassComponent ]
})
export class UmlClassModule { }
