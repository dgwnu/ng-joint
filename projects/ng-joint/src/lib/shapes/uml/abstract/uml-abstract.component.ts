import { Component, Input } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { ElementShapeComponent } from '../../shapes';
import { NgJointUmlElement } from '../shapes-uml';
import { UmlNameType } from '../shapes-uml';
import { UmlAbstractService } from './uml-abstract.service';
import { UmlAbstract } from './uml-abstract';

@Component({
  selector: 'dgwnu-uml-abstract',
  template: `
  <!-- joint.shapes.uml.Abstract  -->
  `,
})
export class UmlAbstractComponent implements ElementShapeComponent {
  @Input() id: string;
  @Input() x: number;
  @Input() y: number;
  @Input() width: number;
  @Input() height: number;
  @Input() name: UmlNameType;
  @Input() attributes?: string[];
  @Input() methods?: string[];
  @Input() attrs?: {};

  constructor(private service: UmlAbstractService) { }

  shape: UmlAbstract;

  createShape(graphElement: DiaGraphElement) {
    this.shape = this.service.createUmlAbstract(
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
 * Ng Joint UML Asbtract Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointUmlAbstract extends NgJointUmlElement {

}
