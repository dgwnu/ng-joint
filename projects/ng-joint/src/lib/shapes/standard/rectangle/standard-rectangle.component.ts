import { Component, Input } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { ElementShapeComponent } from '../../shapes';
import { NgJointStandardElement } from '../shapes-standard';
import { StandardRectangleService } from './standard-rectangle.service';
import { StandardRectangle } from './standard-rectangle';

@Component({
  selector: 'dgwnu-standard-rectangle',
  template: `
    <!-- joint.shapes.standard.Rectangle  -->
    `,
})
export class StandardRectangleComponent implements ElementShapeComponent {
  @Input() id: string;
  @Input() x: number;
  @Input() y: number;
  @Input() width: number;
  @Input() height: number;
  @Input() body: {};
  @Input() label: {};

  constructor(private service: StandardRectangleService) { }

  shape: StandardRectangle;

  createShape(graphElement: DiaGraphElement) {
    this.shape = this.service.createStandardRectangle(
      graphElement,
      this.id,
      this.x,
      this.y,
      this.width,
      this.height,
      this.body,
      this.label
    );
  }

}

/**
 * Ng Joint Standard Rectangle Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointStandardRectangle extends NgJointStandardElement {
  x: number;
  y: number;
  width: number;
  height: number;
  body: {};
  label: {};
}
