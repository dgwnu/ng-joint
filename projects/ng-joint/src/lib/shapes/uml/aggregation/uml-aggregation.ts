import { dia, shapes } from 'jointjs';
import { UmlLinkShape } from '../shapes-uml';

export class UmlAggregation extends UmlLinkShape {

    constructor(
        id: string,
        sourceId: string,
        targetId: string,
        options?: dia.Link.GenericAttributes<shapes.standard.LinkSelectors>
    ) {
        const diaLinkAttributes =  { id: id, sourceId: sourceId, targetId: targetId, options };
        super(diaLinkAttributes);
        this._link = new shapes.uml.Aggregation(diaLinkAttributes);
    }

    get umlAggregation(): shapes.uml.Aggregation {
        return this._link;
    }

}
