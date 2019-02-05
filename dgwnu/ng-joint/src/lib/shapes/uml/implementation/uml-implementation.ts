import { dia, shapes } from 'jointjs';
import { UmlLinkShape } from '../shapes-uml';

export class UmlImplementation extends UmlLinkShape {

    constructor(
        id: string,
        sourceId: string,
        targetId: string,
        options?: dia.Link.GenericAttributes<shapes.standard.LinkSelectors>
    ) {
        const diaLinkAttributes =  { id: id, sourceId: sourceId, targetId: targetId, options };
        super(diaLinkAttributes);
        this._link = new shapes.uml.Implementation(diaLinkAttributes);
    }

    get umlImplementation(): shapes.uml.Implementation {
        return this._link;
    }

}
