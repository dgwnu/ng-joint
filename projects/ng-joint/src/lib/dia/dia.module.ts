import { NgModule } from '@angular/core';

import { DiaPaperService } from './dia-paper.service';
import { DiaPaperComponent } from './dia-paper.component';
import { DiaGraphService } from './dia-graph.service';
import { DiaGraphComponent } from './dia-graph.component';

@NgModule({
  declarations: [ DiaPaperComponent, DiaGraphComponent ],
  providers: [ DiaPaperService, DiaGraphService ],
  exports: [ DiaPaperComponent, DiaGraphComponent ],
})
export class DiaModule { }
