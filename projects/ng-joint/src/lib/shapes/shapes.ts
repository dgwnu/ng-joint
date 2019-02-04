import { OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

import { Subject } from 'rxjs';

import { dia } from 'jointjs';
import { DiaGraphElement } from '../dia/dia-graph-element';

interface ElementParms<T> {
    id: string;
    options?: dia.Element.GenericAttributes<T>;
}


/**
 * Generic Element Shape Class
 */
export abstract class ElementShape {
    protected _id: string;
    protected _element: dia.Element;

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
 * Shape Plugin Interface (group of shapes)
 */
export interface ShapePlugin {
    graphElement: DiaGraphElement;
    onElementPointerClick(cid: string): void;
}

/**
 * Generic Shape Type
 */
export type GenericShape = ElementShape | LinkShape;

/**
 * Generic Shape Type
 */
export type DiaShape = dia.Link | dia.Element;

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
    elementPointerClick: EventEmitter<string>;
    emitElementPointerClick(): void;
}

/**
 * Element Shape Service Interface (service for Generic Element Shape Class)
 */
export interface ElementShapeService {
    createElementShape(
        graphElement: DiaGraphElement,
        component: ElementShapeComponent
      ): ElementShape;
      onEvents(component: ElementShapeComponent): void;
      setChanges(changes: SimpleChanges, component: ElementShapeComponent): void;
}

/**
 * Generic Element Shape Component Class (anchestor for all Element Shapes)
 */
export abstract class GenericElementShapeComponent implements ElementShapeComponent, OnChanges {
  /** one-way binding id property */
  @Input() id: string;

  /** two-way binding x property */
  @Input() get x() { return this._x; }
  @Output() xChange = new EventEmitter<number>();

  /** two-way binding y property */
  @Input() get y() { return this._y; }
  @Output() yChange = new EventEmitter<number>();

  /** two-way binding width property */
  @Input() get width() { return this._width; }
  @Output() widthChange = new EventEmitter<number>();

  /** two-way binding height property */
  @Input() get height() { return this._height; }
  @Output() heightChange = new EventEmitter<number>();

  @Output() elementPointerClick = new EventEmitter<string>();

  constructor(private service: ElementShapeService) {}

  private _x: number;
  private _y: number;
  private _width: number;
  private _height: number;

  set x(xValue: number) {
    if (this._x !== xValue) {
      this._x = xValue;
      this.xChange.emit(this._x);
    }
  }

  set y(yValue: number) {
    if (this._y !== yValue) {
      this._y = yValue;
      this.yChange.emit(this._y);
    }
  }

  set width(widthValue: number) {
    if (this._width !== widthValue) {
        this._width = widthValue;
        this.widthChange.emit(this._width);
    }
  }

  set height(heightValue: number) {
    if (this._height !== heightValue) {
        this._height = heightValue;
        this.heightChange.emit(this._height);
    }
  }

  shape: ElementShape;

  createShape(graphElement: DiaGraphElement) {
    this.shape = this.service.createElementShape(graphElement, this);
    this.service.onEvents(this);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.service.setChanges(changes, this);
  }

  /**
   * Emit Id of current Clicked JointJs Element
   */
  emitElementPointerClick() {
    this.elementPointerClick.emit(this.id);
  }

}

/**
 * Link Shape Component Interface
 */
export interface LinkShapeComponent extends ShapeComponent {
    sourceId: string;
    targetId: string;
    sourceShape: ElementShape;
    targetShape: ElementShape;
    shape: LinkShape;
}

/**
 * Link Shape Service Interface (service for Generic Link Shape Class)
 */
export interface LinkShapeService {
    createLinkShape(
        graphElement: DiaGraphElement,
        component: LinkShapeComponent
      ): LinkShape;
      onEvents(component: LinkShapeComponent): void;
      setChanges(changes: SimpleChanges, component: LinkShapeComponent): void;
}

/**
 * Generic Element Shape Component Class (anchestor for all Element Shapes)
 */
export abstract class GenericLinkShapeComponent implements LinkShapeComponent, OnChanges {
    /** one-way binding id property */
    @Input() id: string;

    /** one-way binding source property */
    @Input() sourceId: string;

    /** one-way binding targerId property */
    @Input() targetId: string;

    constructor(private service: LinkShapeService) {}

    shape: LinkShape;

    set sourceShape(source: ElementShape) {
        this.shape.link.source(source.element);
      }

    set targetShape(target: ElementShape) {
        this.shape.link.target(target.element);
    }

    createShape(graphElement: DiaGraphElement) {
        this.shape = this.service.createLinkShape(graphElement, this);
        this.service.onEvents(this);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.service.setChanges(changes, this);
    }

}


interface NgJointShape {
    id: string;
}

/**
 * Generic Ng Joint Element Interface
 */
export interface NgJointElement extends NgJointShape {
    x: number;
    y: number;
    width: number;
    height: number;
}

/**
 * Generic Ng Joint Link Interface
 */
export interface NgJointLink extends NgJointShape {
    sourceId: string;
    targetId: string;
}
