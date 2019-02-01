import { Component, Input, Output, EventEmitter,
  ElementRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

import { Subject } from 'rxjs';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { ElementShapeComponent } from '../../shapes';
import { NgJointAngularGenericElement } from '../shapes-angular';
import { AngularElementService } from './angular-element.service';
import { AngularElement } from './angular-element';

@Component({
  selector: 'dgwnu-angular-element',
  templateUrl: './angular-element.component.html',
  styleUrls: [ './angular-element.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularElementComponent implements ElementShapeComponent, OnChanges {
  /** one-way binding id property */
  @Input() id: string;

  /** two-way binding x property */
  @Input() get x() { return this._x; }
  @Output() xChange = new EventEmitter();

  /** two-way binding y property */
  @Input() get y() { return this._y; }
  @Output() yChange = new EventEmitter();

  /** two-way binding width property */
  @Input() get width() { return this._width; }
  @Output() widthChange = new EventEmitter();

  /** two-way binding height property */
  @Input() get height() { return this._height; }
  @Output() heightChange = new EventEmitter();

  constructor(
    private service: AngularElementService,
    public ngElementRef: ElementRef
  ) {
  }

  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;

  set x(xValue: number) {
    if (this._x !== xValue) {
      this._x = xValue;
      console.log('x changed', xValue);
      this.xChange.emit(this._x);
    }
  }

  set y(yValue: number) {
    if (this._y !== yValue) {
      this._y = yValue;
      console.log('y changed', yValue);
      this.yChange.emit(this._y);
    }
  }

  set width(widthValue: number) {
    this._width = widthValue;
    this.widthChange.emit(this._width);
  }

  set height(heightValue: number) {
    this._height = heightValue;
    this.heightChange.emit(this._height);
  }

  shape: AngularElement;

  createShape(graphElement: DiaGraphElement) {
    console.log('createShape');
    this.shape = this.service.createElementShape(
      graphElement,
      this
    );

    this.service.onEvents(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.service.setChanges(changes, this);
  }

}

/**
 * Ng Joint Angular Element Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointAngularElement extends NgJointAngularGenericElement {
  x: number;
  y: number;
  width: number;
  height: number;
}
