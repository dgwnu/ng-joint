import { NgModule } from '@angular/core';

import { UmlAggregationService } from './uml-aggregation.service';
import { UmlAggregationComponent } from './uml-aggregation.component';

@NgModule({
  providers: [ UmlAggregationService ],
  declarations: [UmlAggregationComponent],
  exports: [UmlAggregationComponent]
})
export class UmlAggregationModule { }
