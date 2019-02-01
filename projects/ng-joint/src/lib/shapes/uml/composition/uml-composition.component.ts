import { Component, Input } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { LinkShapeComponent, ElementShape } from '../../shapes';
import { NgJointUmlLink } from '../shapes-uml';
import { UmlComposition } from './uml-composition';
import { UmlCompositionService } from './uml-composition.service';

@Component({
  selector: 'dgwnu-uml-composition',
  template: `
    <!-- joint.shapes.uml.Composition  -->
    `,
})
export class UmlCompositionComponent implements LinkShapeComponent {
  @Input() id: string;
  @Input() sourceId: string;
  @Input() targetId: string;

  constructor(private service: UmlCompositionService) { }

  shape: UmlComposition;

  createShape(graphElement: DiaGraphElement) {
    this.shape = this.service.createUmlComposition(
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
 * Ng Joint UML Composition Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointUmlComposition extends NgJointUmlLink {

}
