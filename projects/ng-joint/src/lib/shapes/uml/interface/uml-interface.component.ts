import { Component, Input } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { ElementShapeComponent } from '../../shapes';
import { NgJointUmlElement } from '../shapes-uml';
import { UmlNameType } from '../shapes-uml';
import { UmlInterfaceService } from './uml-interface.service';
import { UmlInterface } from './uml-interface';

@Component({
  selector: 'dgwnu-uml-interface',
  template: `
  <!-- joint.shapes.uml.Interface  -->
  `,
})
export class UmlInterfaceComponent implements ElementShapeComponent {
  @Input() id: string;
  @Input() x: number;
  @Input() y: number;
  @Input() width: number;
  @Input() height: number;
  @Input() name: UmlNameType;
  @Input() attributes: string[];
  @Input() methods: string[];
  @Input() attrs?: {};

  constructor(private service: UmlInterfaceService) { }

  shape: UmlInterface;

  createShape(graphElement: DiaGraphElement) {
    this.shape = this.service.createUmlInterface(
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
 * Ng Joint UML Interface Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointUmlInterface extends NgJointUmlElement {

}
