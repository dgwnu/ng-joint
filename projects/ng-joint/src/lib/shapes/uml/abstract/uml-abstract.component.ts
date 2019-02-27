import { Component } from '@angular/core';

import { GenericUmlElementShapeComponent } from '../shapes-uml';
import { UmlAbstractService } from './uml-abstract.service';
import { UmlAbstract } from './uml-abstract';

@Component({
  selector: 'ng-joint-uml-abstract',
  template: `
  <!-- joint.shapes.uml.Abstract  -->
  `,
})
export class UmlAbstractComponent extends GenericUmlElementShapeComponent {

  constructor(private umlAbstractService: UmlAbstractService) {
    super(umlAbstractService);
  }

  shapeInstance: UmlAbstract;

}

/**
 * Ng Joint UML Asbtract Interface (use this with arrays and structural directives *ngFor, ..)
 */
export { NgJointUmlClass as NgJointUmlAbstract } from '../shapes-uml';
