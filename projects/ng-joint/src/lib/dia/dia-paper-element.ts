import { dia } from 'jointjs';

/**
 * Indexable Holder of Joint Paper Object
 */
export class DiaPaperElement {

  constructor(options: dia.Paper.Options) {
    this._paper = new dia.Paper(options);
  }

  private _paper: dia.Paper;

  get paper(): dia.Paper {
    return this._paper;
  }

}
