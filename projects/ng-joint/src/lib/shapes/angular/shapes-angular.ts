import { ElementRef } from '@angular/core';

import { dia, shapes } from 'jointjs';

import { DiaElement } from '../../dia/element';
import { DiaLink } from '../../dia/link';
import {
    NgJointElement,
    GenericElementShapeComponent,
    ElementShapeService,
    GenericLinkShapeComponent
} from '../shapes';

/**
 * Generic Angular Element Shape
 *
 * Contains extra angular element references for rendering capabilities
 *
 */
export abstract class AngularElementShape extends DiaElement {

    constructor(parms: {id: string, options: dia.Element.GenericAttributes<shapes.basic.RectSelectors>}) {
        super({id: parms.id, options: parms.options});

        parms.options.attrs = {
            rect: { stroke: 'none', 'fill-opacity': 0 }
        };

    }

}

/**
 * Generic Angular Link Shape
 */
export abstract class AngularLinkShape extends DiaLink {

}

/**
 * Generic Angular Element Shapoe Component
 *
 * Contains Angular specific instances
 *
 */
export abstract class GenericAngularElementShapeComponent extends GenericElementShapeComponent {
    shapeInstance: AngularElementShape;

    constructor(private genericAngularElementService: ElementShapeService, private genericNgElementRef: ElementRef) {
        super(genericAngularElementService);
    }

    get ngNode(): Node { return this.genericNgElementRef.nativeElement; }
}

export abstract class GenericAngularLinkShapeComponent extends GenericLinkShapeComponent {
    shapeInstance: AngularLinkShape;
}

export interface NgJointGenericAngularElement extends NgJointElement {

}
