import { shapes } from 'jointjs';
import { UmlElementShape } from '../shapes-uml';

/**
 * Ng Joint UML Class Shape Class
 */
export class UmlClass extends UmlElementShape {

    constructor(id: string, options?: shapes.uml.ClassAttributes, extraOptions?: { [key: string]: any; }) {
        super(id, options, extraOptions);
        this._element = new shapes.uml.Class(options, extraOptions);
    }

}
