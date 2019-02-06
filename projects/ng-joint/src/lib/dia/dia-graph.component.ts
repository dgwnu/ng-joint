import { Component, ContentChild } from '@angular/core';

import { ShapesComponent } from '../shapes/shapes.component';
import { DiaGraphElement } from './dia-graph-element';
import { DiaGraphService } from './dia-graph.service';

/**
 * NgJoint Dia Graph Component
 *
 * Creates DiaGraphElement (ng-joint-dia-paper) instance within a DiaPaperElement (ng-joint-dia-paper)
 *
 */
@Component({
  selector: 'ng-joint-dia-graph',
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
