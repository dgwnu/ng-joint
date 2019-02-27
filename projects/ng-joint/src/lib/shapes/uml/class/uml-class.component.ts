import { Component } from '@angular/core';

import { GenericUmlElementShapeComponent } from '../shapes-uml';
import { UmlClassService } from './uml-class.service';
import { UmlClass } from './uml-class';

@Component({
  selector: 'ng-joint-uml-class',
  template: `
  <!-- joint.shapes.uml.Class  -->
  `,
})
export class UmlClassComponent extends GenericUmlElementShapeComponent {

  constructor(private umlClassService: UmlClassService) {
    super(umlClassService);
  }

  shapeInstance: UmlClass;

}

/**
 * Ng Joint UML Class Interface (use this with arrays and structural directives *ngFor, ..)
 */
export { NgJointUmlClass } from '../shapes-uml';
