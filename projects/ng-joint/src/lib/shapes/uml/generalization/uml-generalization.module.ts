import { NgModule } from '@angular/core';

import { UmlGeneralizationService } from './uml-generalization.service';
import { UmlGeneralizationComponent } from './uml-generalization.component';

@NgModule({
  providers: [ UmlGeneralizationService ],
  declarations: [ UmlGeneralizationComponent ],
  exports: [ UmlGeneralizationComponent ]
})
export class UmlGeneralizationModule { }
