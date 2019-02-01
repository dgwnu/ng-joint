import { OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { Subject } from 'rxjs';

import { dia } from 'jointjs';
import { DiaGraphElement } from '../dia/dia-graph-element';

/**
 * Shape Plugin Interface (group of shapes)
 */
export interface ShapePlugin {
    graphElement: DiaGraphElement;
}

type GenericShape = ElementShape | LinkShape;

/**
 * Shape Component Interface
 */
export interface ShapeComponent {
    id: string;
    shape: GenericShape;
    createShape(graphElement: DiaGraphElement): void;
}

/**
 * Element Shape Component Interface
 */
export interface ElementShapeComponent extends ShapeComponent {
    x: number;
    y: number;
    width: number;
    height: number;
    shape: ElementShape;
}

export interface ElementShapeService {
    createElementShape(
        graphElement: DiaGraphElement,
        component: ElementShapeComponent
      ): ElementShape;
      onEvents(component: ElementShapeComponent): void;
      setChanges(changes: SimpleChanges, component: ElementShapeComponent): void;
}

export abstract class GenericElementShapeComponent implements ElementShapeComponent, OnChanges {
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

  constructor(private service: ElementShapeService) {}

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

  shape: ElementShape;

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
 * Link Shape Component Interface
 */
export interface LinkShapeComponent extends ShapeComponent {
    sourceId: string;
    targetId: string;
    sourceShape: GenericShape;
    targetShape: GenericShape;
    shape: LinkShape;
}

interface ElementParms<T> {
    id: string;
    options?: dia.Element.GenericAttributes<T>;
}

interface ShapeEvent {
    event: string;
    context: any;
}

/**
 * Generic Element Shape Class
 */
export abstract class ElementShape {
    protected _id: string;
    protected _element: dia.Element;
    eventSubject = new Subject<ShapeEvent>();

    constructor(parms: ElementParms<dia.Element.Attributes>) {
        this._id = parms.id;
    }

    get id(): string { return this._id; }
    get element(): dia.Element { return this._element; }
}

interface LinkParms<T> {
    id: string;
    sourceId: string;
    targetId: string;
    options?: dia.Link.GenericAttributes<T>;
}

/**
 * Generic Link Shape Class
 */
export abstract class LinkShape {
    protected _id: string;
    protected _sourceId: string;
    protected _targetId: string;
    protected _link: dia.Link;
    eventSubject = new Subject<ShapeEvent>();

    constructor(parms: LinkParms<dia.Link.Attributes>) {
        this._id = parms.id;
        this._sourceId = parms.sourceId;
        this._targetId = parms.targetId;
    }

    get id(): string { return this._id; }
    get sourceId(): string { return this._sourceId; }
    get targetId(): string { return this.targetId; }
    get link(): dia.Link { return this._link; }
}

/**
 * Generic Ng Joint Element Interface
 */
export interface NgJointElement {
    id: string;
}

/**
 * Generic Ng Joint Link Interface
 */
export interface NgJointLink extends NgJointElement {
    sourceId: string;
    targetId: string;
}
