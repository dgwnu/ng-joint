import { Component } from '@angular/core';

import { GenericUmlLinkShapeComponent } from '../shapes-uml';
import { NgJointUmlLink } from '../shapes-uml';
import { UmlImplementation } from './uml-implementation';
import { UmlImplementationService } from './uml-implementation.service';

@Component({
  selector: 'ng-joint-uml-implementation',
  template: `
    <!-- joint.shapes.uml.Implementation  -->
    `,
})
export class UmlImplementationComponent extends GenericUmlLinkShapeComponent {

  constructor(private umlImplementationService: UmlImplementationService) {
    super(umlImplementationService);
  }

  shape: UmlImplementation;

}

/**
 * Ng Joint UML Implementation Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointUmlImplementation extends NgJointUmlLink {

}
