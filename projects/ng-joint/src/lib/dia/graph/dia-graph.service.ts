import { Injectable } from '@angular/core';

import { dia } from 'jointjs';

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
      .on('change', (context: any) => component.anyChange.emit(context))
      .on('add', (cell: dia.Cell) => component.cellAdd.emit(cell.cid))
      .on('remove', (cell: dia.Cell) => component.cellRemove.emit(cell.cid))
    ;

  }

}
