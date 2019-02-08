import { dia } from 'jointjs';

/**
 * Dia Link Constructor Parameters
 */
interface DiaLinkParms<T> {
    id: string;
    sourceId: string;
    targetId: string;
    options?: dia.Link.GenericAttributes<T>;
}

/**
 * Dia Link Class
 */
export abstract class DiaLink {
    protected _id: string;
    protected _sourceId: string;
    protected _targetId: string;
    protected _jointjsObject: dia.Link;

    constructor(parms: DiaLinkParms<dia.Link.Attributes>) {
        this._id = parms.id;
        this._sourceId = parms.sourceId;
        this._targetId = parms.targetId;
    }

    get id(): string { return this._id; }
    get sourceId(): string { return this._sourceId; }
    get targetId(): string { return this.targetId; }
    get jointjsObject(): dia.Link { return this._jointjsObject; }
}
