import { Component, Input } from '@angular/core';

import { GenericElementShapeComponent } from '../../shapes';
import { NgJointUmlElement, UmlNameType, UmlElementShapeComponent } from '../shapes-uml';
import { UmlAbstractService } from './uml-abstract.service';
import { UmlAbstract } from './uml-abstract';

@Component({
  selector: 'dgwnu-uml-abstract',
  template: `
  <!-- joint.shapes.uml.Abstract  -->
  `,
})
export class UmlAbstractComponent extends GenericElementShapeComponent implements UmlElementShapeComponent {
  @Input() name: UmlNameType;
  @Input() attributes?: string[];
  @Input() methods?: string[];
  @Input() attrs?: {};

  constructor(private umlAbstractService: UmlAbstractService) {
    super(umlAbstractService);
  }

  shape: UmlAbstract;

}

/**
 * Ng Joint UML Asbtract Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointUmlAbstract extends NgJointUmlElement {

}
