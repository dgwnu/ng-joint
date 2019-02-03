import { Component, Input } from '@angular/core';

import { GenericStandardElementShapeComponent, NgJointGenericStandardElement } from '../shapes-standard';
import { StandardRectangleService } from './standard-rectangle.service';
import { StandardRectangle } from './standard-rectangle';

/**
 * joint.shapes.standard.Rectangle Component
 * based on: https://github.com/clientIO/joint/blob/master/plugins/shapes/joint.shapes.standard.js
 */
@Component({
  selector: 'dgwnu-standard-rectangle',
  template: `
    <!-- joint.shapes.standard.Rectangle  -->
    `,
})
export class StandardRectangleComponent extends GenericStandardElementShapeComponent {
  @Input() body?: SVGRectElement;
  @Input() label?: SVGTextElement;

  constructor(private standardRectangleService: StandardRectangleService) {
    super(standardRectangleService);
  }

  shape: StandardRectangle;

}

/**
 * Ng Joint Standard Rectangle Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointStandardRectangle extends NgJointGenericStandardElement {
  body?: SVGRectElement;
  label?: SVGTextElement;
}
