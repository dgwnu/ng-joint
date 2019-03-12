import { Injectable } from '@angular/core';

import { DiaGraph } from './dia-graph';
import { DiaGraphComponent } from './dia-graph.component';

@Injectable({
  providedIn: 'root'
})
export class DiaGraphService {

  constructor() { }

  createGraph(): DiaGraph {
    return new DiaGraph();
  }

  onEvents(component: DiaGraphComponent) {
    component.graphInstance.jointjsObject
      .on('add', (context: any) => component.graphAdd.emit(context.model.cid))
    ;
  }

}
