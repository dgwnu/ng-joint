import { Component, Input } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { LinkShapeComponent, ElementShape } from '../../shapes';
import { NgJointUmlLink } from '../shapes-uml';
import { UmlGeneralization } from './uml-generalization';
import { UmlGeneralizationService } from './uml-generalization.service';

@Component({
  selector: 'dgwnu-uml-generalization',
  template: `
    <!-- joint.shapes.uml.Generalization  -->
    `,
})
export class UmlGeneralizationComponent implements LinkShapeComponent {
  @Input() id: string;
  @Input() sourceId: string;
  @Input() targetId: string;

  constructor(private service: UmlGeneralizationService) { }

  shape: UmlGeneralization;

  createShape(graphElement: DiaGraphElement) {
    this.shape = this.service.createUmlGeneralization(
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
 * Ng Joint UML Generalization Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointUmlGeneralization extends NgJointUmlLink {

}
