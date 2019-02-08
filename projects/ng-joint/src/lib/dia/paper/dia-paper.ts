import { dia } from 'jointjs';

/**
 * Indexable Holder of Joint Paper Object
 */
export class DiaPaper {

  constructor(options: dia.Paper.Options) {
    this._jointjsObject = new dia.Paper(options);
  }

  private _jointjsObject: dia.Paper;

  get jointjsObject(): dia.Paper {
    return this._jointjsObject;
  }

}
