import { ElementRef } from '@angular/core';

import { dia, shapes } from 'jointjs';

import { DiaElement } from '../../dia/element';
import { NgJointElement, GenericElementShapeComponent } from '../shapes';

/**
 * Generic Angular Element Shape
 *
 * Contains extra angular element references for rendering capabilities
 *
 */
export abstract class AngularElementShape extends DiaElement {
    private _ngElementRef: ElementRef;

    constructor(parms: {id: string, options: dia.Element.GenericAttributes<shapes.basic.RectSelectors>}) {
        super({id: parms.id, options: parms.options});

        parms.options.attrs = {
            rect: { stroke: 'none', 'fill-opacity': 0 },
        };

    }

    set ngElementRef(value: ElementRef) {
        this._ngElementRef = value;
    }

    get ngNode(): Node { return this._ngElementRef.nativeElement; }

}

/**
 * Generic Angular Element Shapoe Component
 *
 * Contains Angular specific instances
 *
 */
export abstract class GenericAngularElementShapeComponent extends GenericElementShapeComponent {
    shapeInstance: AngularElementShape;
}

export interface NgJointAngularGenericElement extends NgJointElement {

}
