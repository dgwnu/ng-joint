import { Component, Input } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { LinkShapeComponent, ElementShape } from '../../shapes';
import { NgJointUmlLink } from '../shapes-uml';
import { UmlAggregation } from './uml-aggregation';
import { UmlAggregationService } from './uml-aggregation.service';

@Component({
  selector: 'dgwnu-uml-aggregation',
  template: `
    <!-- joint.shapes.uml.Aggregation  -->
    `,
})
export class UmlAggregationComponent implements LinkShapeComponent {
  @Input() id: string;
  @Input() sourceId: string;
  @Input() targetId: string;

  constructor(private service: UmlAggregationService) { }

  shape: UmlAggregation;

  createShape(graphElement: DiaGraphElement) {
    this.shape = this.service.createUmlAggregation(
      graphElement,
      this.id,
      this.sourceId,
      this.targetId
    );
  }

  set sourceShape(source: ElementShape) {
    this.shape.link.source(source.element);
  }

  set targetShape(target: ElementShape) {
    this.shape.link.target(target.element);
  }

}

/**
 * Ng Joint UML Composition Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointUmlAggregation extends NgJointUmlLink {

}
