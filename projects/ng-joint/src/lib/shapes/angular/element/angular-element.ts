import { dia, shapes } from 'jointjs';
import { AngularElementShape } from '../shapes-angular';

/**
 * Constructor Angular Element
 */
export class AngularElement extends AngularElementShape {
    constructor(id: string, options: dia.Element.GenericAttributes<shapes.basic.RectSelectors>) {
        super({ id: id, options});
        this._jointjsObject = new shapes.basic.Rect(options);
    }
}
