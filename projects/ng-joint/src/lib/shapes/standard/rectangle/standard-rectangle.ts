import { dia, shapes } from 'jointjs';
import { StandardElementShape } from '../shapes-standard';

/**
 * Ng Joint Standard Rectangle Shape Class
 */
export class StandardRectangle extends StandardElementShape {

    constructor(id: string, options?: dia.Element.GenericAttributes<shapes.standard.RectangleSelectors>) {
        super({id: id, options });
        this._element = new shapes.standard.Rectangle(options);
    }

}
