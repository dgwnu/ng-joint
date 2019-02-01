import { ElementRef } from '@angular/core';

import * as joint from 'jointjs';
import { AngularElementShape } from '../shapes-angular';

/**
 * Constructor Angular Element
 */
export class AngularElement extends AngularElementShape {
    private _ngElementRef: ElementRef;

    constructor(
        id: string, ngElementRef: ElementRef,
        options: joint.dia.Element.GenericAttributes<joint.shapes.basic.RectSelectors>
    ) {
        super({ id: id, options });

        options.attrs = {
            rect: { stroke: 'none', 'fill-opacity': 0 },
        };

        this._element = new joint.shapes.basic.Rect(options);
        this._ngElementRef = ngElementRef;
    }

    get ngNode(): Node { return this._ngElementRef.nativeElement; }

}
