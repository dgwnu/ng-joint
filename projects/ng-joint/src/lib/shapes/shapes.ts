import {
    OnChanges,
    Input,
    Output,
    EventEmitter,
    SimpleChanges
} from '@angular/core';

import { dia } from 'jointjs';
import { DiaGraph } from '../dia/graph';
import { DiaElement } from '../dia/element';
import { DiaLink } from '../dia/link';

/**
 * Shape Plugin Interface (group of shapes)
 */
export interface ShapePlugin {
    graphInstance: DiaGraph;
}

/**
 * Services needed to maintain Plugin Shapes
 */
export interface ShapePluginService {
    initShapePluginComponent(component: ShapePlugin): void;
}

/**
 * Generic Shape Plugin Component Class (anchestor for all Shape Plugin Components)
 */
export abstract class GenericShapePluginComponent implements ShapePlugin {

    constructor(private service: ShapePluginService) {}

    private _graphInstance: DiaGraph;

    set graphInstance(graphInstance: DiaGraph) {
      this._graphInstance = graphInstance;
      this.service.initShapePluginComponent(this);
    }

    get graphInstance() {
      return this._graphInstance;
    }

}

/**
 * Generic Shape Type
 */
export type GenericShape = DiaElement | DiaLink;

/**
 * JointJs Dia Shape Type
 */
export type DiaShape = dia.Link | dia.Element;

/**
 * Shape Component Interface
 */
export interface ShapeComponent {
    id: string;
    graphInstance: DiaGraph;
    shapeInstance: GenericShape;
    createShape(graphInstance: DiaGraph): void;
}

/**
 * Element Shape Component Interface
 */
export interface ElementShapeComponent extends ShapeComponent {
    x: number;
    y: number;
    width: number;
    height: number;
    shapeInstance: DiaElement;
    elementPointerClick: EventEmitter<string>;
}

/**
 * Element Shape Service Interface (service for Generic Element Shape Class)
 */
export interface ElementShapeService {
    shapeOptions(component: ElementShapeComponent): {};
    createElementShape(id: string, options: {}): DiaElement;
    configShape(component: ElementShapeComponent): void;
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
    /** @ignore */
    @Output() xChange = new EventEmitter<number>();

    /** two-way binding y property */
    @Input() get y() { return this._y; }
    /** @ignore */
    @Output() yChange = new EventEmitter<number>();

    /** two-way binding width property */
    @Input() get width() { return this._width; }
    /** @ignore */
    @Output() widthChange = new EventEmitter<number>();

    /** two-way binding height property */
    @Input() get height() { return this._height; }
    /** @ignore */
    @Output() heightChange = new EventEmitter<number>();

    /** jointjs.dia.Paper event (element:pointer:click) */
    @Output() elementPointerClick = new EventEmitter<string>();

    constructor(private service: ElementShapeService) {}

    /** @ignore */
    private _x: number;
    /** @ignore */
    private _y: number;
    /** @ignore */
    private _width: number;
    /** @ignore */
    private _height: number;

    /** @ignore */
    set x(xValue: number) {
        if (this._x !== xValue) {
        this._x = xValue;
        this.xChange.emit(this._x);
        }
    }

    /** @ignore */
    set y(yValue: number) {
        if (this._y !== yValue) {
        this._y = yValue;
        this.yChange.emit(this._y);
        }
    }

    /** @ignore */
    set width(widthValue: number) {
        if (this._width !== widthValue) {
            this._width = widthValue;
            this.widthChange.emit(this._width);
        }
    }

    /** @ignore */
    set height(heightValue: number) {
        if (this._height !== heightValue) {
            this._height = heightValue;
            this.heightChange.emit(this._height);
        }
    }

    /** NgJoint Graph Instance */
    graphInstance: DiaGraph;
    /** NgJoint Shape Element Instance */
    shapeInstance: DiaElement;

    /** Create Shape Element Instance and initialize event handlers */
    createShape(graphInstance: DiaGraph) {
        console.log('PRE: createShape.shapeInstance', this.shapeInstance);
        this.graphInstance =  graphInstance;
        const shapeOptions = this.service.shapeOptions(this);
        this.shapeInstance = this.service.createElementShape(this.id, shapeOptions);
        this.service.configShape(this);
        console.log('POST: createShape.shapeInstance', this.shapeInstance);
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
    sourceShape: DiaElement;
    targetShape: DiaElement;
    shapeInstance: DiaLink;
    linkPointerClick: EventEmitter<string>;
}

/**
 * Link Shape Service Interface (service for Generic Link Shape Class)
 */
export interface LinkShapeService {
    shapeOptions(component: LinkShapeComponent): {};
    createLinkShape(id: string, sourceId: string, targetId: string, options: {}): DiaLink;
    configShape(component: LinkShapeComponent): void;
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

    /** jointjs.dia.Paper event (link:pointer:click) */
    @Output() linkPointerClick = new EventEmitter<string>();

    constructor(private service: LinkShapeService) {}

    /** NgJoint Graph Instance */
    graphInstance: DiaGraph;
    /** NgJoint Shape Link Instance */
    shapeInstance: DiaLink;
    /** MetaData of generated properties */
    shapePropertiesMetaData: any;

    set sourceShape(source: DiaElement) {
        this.shapeInstance.jointjsObject.source(source.jointjsObject);
      }

    set targetShape(target: DiaElement) {
        this.shapeInstance.jointjsObject.target(target.jointjsObject);
    }

    createShape(graphInstance: DiaGraph) {
        console.log('PRE: createShape.shapeInstance', this.shapeInstance);
        this.graphInstance =  graphInstance;
        const shapeOptions = this.service.shapeOptions(this);
        this.shapeInstance = this.service.createLinkShape(
            this.id, this.sourceId, this.targetId, shapeOptions);
        this.service.configShape(this);
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
