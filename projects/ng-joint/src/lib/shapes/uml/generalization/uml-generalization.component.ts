import { Component } from '@angular/core';

import { GenericUmlLinkShapeComponent } from '../shapes-uml';
import { NgJointUmlLink } from '../shapes-uml';
import { UmlGeneralization } from './uml-generalization';
import { UmlGeneralizationService } from './uml-generalization.service';

@Component({
  selector: 'ng-joint-uml-generalization',
  template: `
    <!-- joint.shapes.uml.Generalization  -->
    `,
})
export class UmlGeneralizationComponent extends GenericUmlLinkShapeComponent {

  constructor(private umlGeneralizationService: UmlGeneralizationService) {
    super(umlGeneralizationService);
  }

  shapeInstance: UmlGeneralization;

}

/**
 * Ng Joint UML Generalization Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointUmlGeneralization extends NgJointUmlLink {

}
