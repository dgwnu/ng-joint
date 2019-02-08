import { Component } from '@angular/core';

import { GenericUmlLinkShapeComponent } from '../shapes-uml';
import { NgJointUmlLink } from '../shapes-uml';
import { UmlAggregation } from './uml-aggregation';
import { UmlAggregationService } from './uml-aggregation.service';

@Component({
  selector: 'ng-joint-uml-aggregation',
  template: `
    <!-- joint.shapes.uml.Aggregation  -->
    `,
})
export class UmlAggregationComponent extends GenericUmlLinkShapeComponent {

  constructor(private umlAggregationService: UmlAggregationService) {
    super(umlAggregationService);
  }

  shapeInstance: UmlAggregation;

}

/**
 * Ng Joint UML Composition Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointUmlAggregation extends NgJointUmlLink {

}
