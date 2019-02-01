import { Component, Input } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { LinkShapeComponent, ElementShape } from '../../shapes';
import { NgJointUmlLink } from '../shapes-uml';
import { UmlImplementation } from './uml-implementation';
import { UmlImplementationService } from './uml-implementation.service';

@Component({
  selector: 'dgwnu-uml-implementation',
  template: `
    <!-- joint.shapes.uml.Implementation  -->
    `,
})
export class UmlImplementationComponent implements LinkShapeComponent {
  @Input() id: string;
  @Input() sourceId: string;
  @Input() targetId: string;

  constructor(private service: UmlImplementationService) { }

  shape: UmlImplementation;

  createShape(graphElement: DiaGraphElement) {
    this.shape = this.service.createUmlImplementation(
      graphElement,
      this.id,
      this.sourceId,
      this.targetId
    );
  }

  set sourceShape(source: ElementShape) {
    this.shape.link.source(source.element);
  }

  set targetShape(target: ElementShape) {
    this.shape.link.target(target.element);
  }

}

/**
 * Ng Joint UML Implementation Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointUmlImplementation extends NgJointUmlLink {

}
