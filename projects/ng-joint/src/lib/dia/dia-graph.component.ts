import { Component, ContentChild } from '@angular/core';

import { ShapesComponent } from '../shapes/shapes.component';
import { DiaGraphElement } from './dia-graph-element';
import { DiaGraphService } from './dia-graph.service';

/**
 * JointNg Graph Component
 *
 * <dgwnu-paper ...>
 *
 *    <dgwnu-dia-graph>
 *
 *        ...(Shape-plugins)...
 *
 *    </<dgwnu-dia-graph>
 *
 *  </dgwnu-paper>
 */
@Component({
  selector: 'dgwnu-dia-graph',
  templateUrl: './dia-graph.component.html'
})
export class DiaGraphComponent {
  /** Shape-plugins Component */
  @ContentChild(ShapesComponent) shapes: ShapesComponent;

  constructor(
    private service: DiaGraphService
  ) {
    this.graphElement = this.service.createGraphElement();
  }

  /**  JointNg Graph Object Instance */
  graphElement: DiaGraphElement;

  /**
   * Trigger to add the Shapes to the Graph Instance
   */
  addShapes() {
    this.shapes.graphElement = this.graphElement;
  }

}
