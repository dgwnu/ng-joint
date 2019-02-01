import { Component, Input } from '@angular/core';

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
  @Input() tabIndex?: number;
  @Input() title?: string;
  @Input() fill?: string;
  @Input() fillOpacity?: number;
  @Input() label?: string;

  constructor(private standardRectangleService: StandardRectangleService) {
    super(standardRectangleService);
  }

}

/**
 * Ng Joint Standard Rectangle Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointStandardRectangle extends NgJointStandardElement {

}
