import { ElementRef } from '@angular/core';

import { dia, shapes } from 'jointjs';
import { AngularElementShape } from '../shapes-angular';

/**
 * Constructor Angular Element
 */
export class AngularElement extends AngularElementShape {

    constructor(
        id: string, ngElementRef: ElementRef,
        options: dia.Element.GenericAttributes<shapes.basic.RectSelectors>
    ) {
        super(id, ngElementRef, options);
    }
}
