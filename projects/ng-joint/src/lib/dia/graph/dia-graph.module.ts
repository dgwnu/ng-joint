import { NgModule } from '@angular/core';

import { DiaGraphService } from './dia-graph.service';
import { DiaGraphComponent } from './dia-graph.component';

@NgModule({
  providers: [ DiaGraphService ],
  declarations: [ DiaGraphComponent ],
  imports: [],
  exports: [ DiaGraphComponent ]
})
export class DiaGraphModule { }
