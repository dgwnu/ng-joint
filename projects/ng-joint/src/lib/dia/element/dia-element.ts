import { dia } from 'jointjs';

/**
 * Dia Element Constructor Parameters
 */
interface DiaElementParms<T> {
    id: string;
    options?: dia.Element.GenericAttributes<T>;
}


/**
 * Dia Element Class
 */
export abstract class DiaElement {
    protected _id: string;
    protected _jointjsObject: dia.Element;

    constructor(parms: DiaElementParms<dia.Element.Attributes>) {
        this._id = parms.id;
    }

    get id(): string { return this._id; }
    get jointjsObject(): dia.Element { return this._jointjsObject; }
}
