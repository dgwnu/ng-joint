import { ElementRef } from '@angular/core';

import { dia, shapes } from 'jointjs';

import { DiaElement } from '../../dia/element';
import { NgJointElement } from '../shapes';


export class AngularElementShape extends DiaElement {
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

export interface NgJointAngularGenericElement extends NgJointElement {

}
