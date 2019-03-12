import { Component, ContentChild, Output, EventEmitter } from '@angular/core';

import { ShapesComponent } from '../../shapes/shapes.component';
import { DiaGraph } from './dia-graph';
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
    this.graphInstance = this.service.createGraph();
    this.service.onEvents(this);
  }

  /**  JointNg Graph Object Instance */
  graphInstance: DiaGraph;

  /** jointjs.dia.Graph event (change) */
  @Output() anyChange = new EventEmitter<any>();

  /** jointjs.dia.Graph event (add) */
  @Output() cellAdd = new EventEmitter<string>();

  /** jointjs.dia.Graph event (remove) */
  @Output() cellRemove = new EventEmitter<string>();

  /**
   * Trigger to add the Shapes to the Graph Instance
   */
  addShapes() {
    this.shapes.graphInstance = this.graphInstance;
  }

}
