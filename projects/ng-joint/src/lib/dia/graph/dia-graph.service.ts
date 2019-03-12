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

  /**
   * handling jointjs.dia.Graph events on Angular Component HTML-template
   */
  onEvents(component: DiaGraphComponent) {

    component.graphInstance.jointjsObject
      .on('change', (context: any) => component.graphChange.emit(context.model.cid))
      .on('add', (context: any) => component.graphAdd.emit(context.model.cid))
      .on('remove', (context: any) => component.graphRemove.emit(context.model.cid))
    ;

  }

}
