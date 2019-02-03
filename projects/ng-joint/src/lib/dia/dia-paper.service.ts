import { Injectable } from '@angular/core';

import { dia } from 'jointjs';

import { DiaPaperElement } from './dia-paper-element';
import { DiaPaperComponent } from './dia-paper.component';

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

  /**
   * NgJoint dia.Paper.events handling
   * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
   */
  onPaperEvents(component: DiaPaperComponent) {
    component.paperElement.paper
      .on('element:pointerclick', (context: any) => { component.onElementPointerClick(context.model.cid); })
    ;
  }

}
