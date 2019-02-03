import { Component, Input } from '@angular/core';

import { GenericElementShapeComponent } from '../../shapes';
import { NgJointUmlElement, UmlNameType, UmlElementShapeComponent } from '../shapes-uml';
import { UmlInterfaceService } from './uml-interface.service';
import { UmlInterface } from './uml-interface';

@Component({
  selector: 'dgwnu-uml-interface',
  template: `
  <!-- joint.shapes.uml.Interface  -->
  `,
})
export class UmlInterfaceComponent extends GenericElementShapeComponent implements UmlElementShapeComponent {
  @Input() name: UmlNameType;
  @Input() attributes: string[];
  @Input() methods: string[];
  @Input() attrs?: {};

  constructor(private umlInterfaceService: UmlInterfaceService) {
    super(umlInterfaceService);
  }

  shape: UmlInterface;

}

/**
 * Ng Joint UML Interface Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointUmlInterface extends NgJointUmlElement {

}
