import { Component, Input, Output, EventEmitter } from '@angular/core';

import { GenericElementShapeComponent } from '../../shapes';
import { NgJointStandardElement } from '../shapes-standard';
import { StandardRectangleService } from './standard-rectangle.service';
import { StandardRectangle } from './standard-rectangle';
import { initDomAdapter } from '@angular/platform-browser/src/browser';

@Component({
  selector: 'dgwnu-standard-rectangle',
  template: `
    <!-- joint.shapes.standard.Rectangle  -->
    `,
})
export class StandardRectangleComponent extends GenericElementShapeComponent {
  @Input() root: {};
  @Input() body?: {};
  @Input() label?: {};

  constructor(private standardRectangleService: StandardRectangleService) {
    super(standardRectangleService);
  }

  shape: StandardRectangle;

}

/**
 * Ng Joint Standard Rectangle Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointStandardRectangle extends NgJointStandardElement {
  root?: {};
  body?: {};
  label?: {};
}
