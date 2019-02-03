import { Component, ContentChild } from '@angular/core';

import { ShapesComponent } from '../shapes/shapes.component';
import { DiaGraphElement } from './dia-graph-element';
import { DiaGraphService } from './dia-graph.service';

@Component({
  selector: 'dgwnu-dia-graph',
  templateUrl: './dia-graph.component.html'
})
export class DiaGraphComponent {
  @ContentChild(ShapesComponent) shapes: ShapesComponent;

  constructor(
    private service: DiaGraphService
  ) {
    this._graphElement = this.service.createGraphElement();
  }

  private _graphElement: DiaGraphElement;

  get graphElement(): DiaGraphElement {
    return this._graphElement;
  }

  /**
   * Trigger to add the Shapes to the Graph Instance
   */
  addShapes() {
    this.shapes.graphElement = this._graphElement;
  }

  onElementPointerClick(cid: string) {
    console.log('graph.onElementPointerClick', cid);
  }

}
