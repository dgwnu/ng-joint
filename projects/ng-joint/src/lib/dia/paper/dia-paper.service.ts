import { Injectable } from '@angular/core';

import { dia } from 'jointjs';

import { DiaPaper } from './dia-paper';
import { DiaPaperComponent } from './dia-paper.component';

/**
 * Angular Joint Dia Paper Service:
 */
@Injectable({
  providedIn: 'root'
})
export class DiaPaperService {

  createPaper(options: dia.Paper.Options): DiaPaper {
    return new DiaPaper(options);
  }

  /**
   * jointjs internal dia.Paper.event handling
   *
   * Based on: https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
   *
   *    onPaperEvents(..)
   *             |
   *             ? -> DiaGPaperComponent -> emit(..)
   *             |
   *             V
   *    DiaGraph.jointEvent.next(..)
   *             |
   *             ? -> DiaGraphComponent -> emit(..)
   *             |
   *             + -> ShapeService
   *                     |
   *                     + onElementEvents(..)
   *                     |    |
   *                     |    ?-> GenericElementShapeComponent -> emit(..)
   *                     |
   *                     + onLinkEvents(..)
   *                          |
   *                          ? -> GenericLinkShapeComponent -> emit(..)
   *
   */
  onPaperEvents(component: DiaPaperComponent) {
    component.paperInstance.jointjsObject
      .on('element:pointerclick', (context: any) => {
        component.graph.graphInstance.jointEvent.next(
          {
            cid: context.model.cid,
            eventSource: 'element',
            eventType: 'pointerclick'
          }
        );
      })
      ;
  }

}
