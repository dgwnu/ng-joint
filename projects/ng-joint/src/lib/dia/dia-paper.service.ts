import { Injectable } from '@angular/core';

import { dia } from 'jointjs';

import { DiaPaperElement } from './dia-paper-element';

/**
 * Angular Joint Dia Paper Service:
 */
@Injectable({
  providedIn: 'root'
})
export class DiaPaperService {

  constructor() { }

  private _paperArray: DiaPaperElement[] = [];

  createPaper(options: dia.Paper.Options): DiaPaperElement {
    return new DiaPaperElement(options);
  }

}
