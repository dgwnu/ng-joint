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
 * Element Shape Component Interface
 */
export interface ElementShapeComponent {
    id: string;
    shape: GenericShape;
    createShape(graphElement: DiaGraphElement): void;
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

}

/**
 * Link Shape Component Interface
 */
export interface LinkShapeComponent extends ElementShapeComponent {
    sourceId: string;
    targetId: string;
    sourceShape: GenericShape;
    targetShape: GenericShape;
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
