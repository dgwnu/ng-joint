import { Component, Input, Output, EventEmitter } from '@angular/core';

import { GenericElementShapeComponent } from '../../shapes';
import { NgJointStandardElement } from '../shapes-standard';
import { StandardRectangleService } from './standard-rectangle.service';
import { StandardRectangle } from './standard-rectangle';

@Component({
  selector: 'dgwnu-standard-rectangle',
  template: `
    <!-- joint.shapes.standard.Rectangle  -->
    `,
})
export class StandardRectangleComponent extends GenericElementShapeComponent {
  /** two-way binding body property */
  @Input() get body() { return this._body; }
  @Output() bodyChange = new EventEmitter<{}>();

  /** two-way binding label property */
  @Input() get label() { return this._label; }
  @Output() labelChange = new EventEmitter<{}>();

  constructor(private standardRectangleService: StandardRectangleService) {
    super(standardRectangleService);
  }

  private _body: {};
  private _label: {};
  shape: StandardRectangle;

  set body(bodyValue: {}) {
    if (this._body !== bodyValue) {
      this._body = bodyValue;
      this.yChange.emit(this._body);
    }
  }

  set label(labelValue: {}) {
    if (this._label !== labelValue) {
      this._label = labelValue;
      this.labelChange.emit(this._label);
    }
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
