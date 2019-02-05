import { dia, shapes } from 'jointjs';
import { StandardLinkShape } from '../shapes-standard';

export class StandardLink extends StandardLinkShape {

    constructor(
        id: string,
        sourceId: string,
        targetId: string,
        options?: dia.Link.GenericAttributes<shapes.standard.LinkSelectors>
    ) {
        super({ id: id, sourceId: sourceId, targetId: targetId, options });
        this._link = new shapes.standard.Link(options);
    }

    get standardLink(): shapes.standard.Link {
        return this._link;
    }

}
