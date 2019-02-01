import { Component, Input } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { LinkShapeComponent, ElementShape } from '../../shapes';
import { NgJointStandardLink } from '../shapes-standard';
import { StandardLink } from './standard-link';
import { StandardLinkService } from './standard-link.service';

@Component({
  selector: 'dgwnu-standard-link',
  template: `
    <!-- joint.shapes.standard.Link  -->
    `,
})
export class StandardLinkComponent implements LinkShapeComponent {
  @Input() id: string;
  @Input() sourceId: string;
  @Input() targetId: string;

  constructor(private linkService: StandardLinkService) { }

  shape: StandardLink;

  createShape(graphElement: DiaGraphElement) {
    this.shape = this.linkService.createStandardLink(
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
 * Ng Joint Standard Link Interface (use this with arrays and structural directives *ngFor, ..)
 */
export { NgJointStandardLink };