import { NgModule } from '@angular/core';

import { UmlCompositionService } from './uml-composition.service';
import { UmlCompositionComponent } from './uml-composition.component';

@NgModule({
  providers: [ UmlCompositionService ],
  declarations: [ UmlCompositionComponent ],
  exports: [ UmlCompositionComponent ]
})
export class UmlCompositionModule { }
