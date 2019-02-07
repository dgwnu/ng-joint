import { Component } from '@angular/core';

import { GenericUmlClassShapeComponent } from '../shapes-uml';
import { UmlInterfaceService } from './uml-interface.service';
import { UmlInterface } from './uml-interface';

@Component({
  selector: 'ng-joint-uml-interface',
  template: `
  <!-- joint.shapes.uml.Interface  -->
  `,
})
export class UmlInterfaceComponent extends GenericUmlClassShapeComponent {

  constructor(private umlInterfaceService: UmlInterfaceService) {
    super(umlInterfaceService);
  }

  shape: UmlInterface;

}

/**
 * Ng Joint UML Interface Interface (use this with arrays and structural directives *ngFor, ..)
 */
export { NgJointUmlClass as NgJointUmlInterface } from '../shapes-uml';
