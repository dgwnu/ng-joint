import { dia, shapes } from 'jointjs';
import { UmlLinkShape } from '../shapes-uml';

export class UmlGeneralization extends UmlLinkShape {

    constructor(
        id: string,
        sourceId: string,
        targetId: string,
        options?: dia.Link.GenericAttributes<shapes.standard.LinkSelectors>
    ) {
        const diaLinkAttributes =  { id: id, sourceId: sourceId, targetId: targetId, options };
        super(diaLinkAttributes);
        this._link = new shapes.uml.Generalization(diaLinkAttributes);
    }

    get umlGeneralization(): shapes.uml.Generalization {
        return this._link;
    }

}
