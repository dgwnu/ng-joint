import { Component, Input } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { ElementShapeComponent } from '../../shapes';
import { NgJointUmlElement } from '../shapes-uml';
import { UmlNameType } from '../shapes-uml';
import { UmlClassService } from './uml-class.service';
import { UmlClass } from './uml-class';

@Component({
  selector: 'dgwnu-uml-class',
  template: `
  <!-- joint.shapes.uml.Class  -->
  `,
})
export class UmlClassComponent implements ElementShapeComponent {
  @Input() id: string;
  @Input() x: number;
  @Input() y: number;
  @Input() width: number;
  @Input() height: number;
  @Input() name: UmlNameType;
  @Input() attributes: string[];
  @Input() methods: string[];
  @Input() attrs?: {};

  constructor(private service: UmlClassService) { }

  shape: UmlClass;

  createShape(graphElement: DiaGraphElement) {
    this.shape = this.service.createUmlClass(
      graphElement,
      this.id,
      this.x,
      this.y,
      this.width,
      this.height,
      this.name,
      this.attributes,
      this.methods,
      this.attrs
    );
  }

}

/**
 * Ng Joint UML Class Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointUmlClass extends NgJointUmlElement {

}
