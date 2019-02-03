import { Component, Input } from '@angular/core';

import { GenericElementShapeComponent } from '../../shapes';
import { NgJointUmlElement, UmlNameType, UmlElementShapeComponent } from '../shapes-uml';
import { UmlClassService } from './uml-class.service';
import { UmlClass } from './uml-class';

@Component({
  selector: 'dgwnu-uml-class',
  template: `
  <!-- joint.shapes.uml.Class  -->
  `,
})
export class UmlClassComponent extends GenericElementShapeComponent implements UmlElementShapeComponent {
  @Input() name: UmlNameType;
  @Input() attributes: string[];
  @Input() methods: string[];
  @Input() attrs?: {};

  constructor(private umlClassService: UmlClassService) {
    super(umlClassService);
  }

  shape: UmlClass;

}

/**
 * Ng Joint UML Class Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointUmlClass extends NgJointUmlElement {

}
