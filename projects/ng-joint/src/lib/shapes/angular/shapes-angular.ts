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

    constructor(id: string, options: dia.Element.GenericAttributes<shapes.basic.RectSelectors>) {
        super({ id: id, options });

        options.attrs = {
            rect: { stroke: 'none', 'fill-opacity': 0 },
        };

        this._jointjsObject = new shapes.basic.Rect(options);
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
