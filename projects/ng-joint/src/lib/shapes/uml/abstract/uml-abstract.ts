import { shapes } from 'jointjs';
import { UmlElementShape } from '../shapes-uml';

/**
 * Ng Joint UML Abstract Shape Class
 */
export class UmlAbstract extends UmlElementShape {

    constructor(id: string, options?: shapes.uml.ClassAttributes, extraOptions?: { [key: string]: any; }) {
        super(id, options, extraOptions);
        this._element = new shapes.uml.Abstract(options, extraOptions);
    }

}
