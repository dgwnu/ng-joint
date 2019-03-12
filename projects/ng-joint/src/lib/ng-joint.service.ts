import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { dia } from 'jointjs';

@Injectable({
  providedIn: 'root'
})
export class NgJointService {

  constructor() { }

  /** jointjs internal events subjects */
  jointEventSubject = new Subject<{
    cid: string;
    eventSource:
      'paper' |
      'cell' |
      'link' |
      'element' |
      'blank';
    eventType:
      'pointerdblclick' |
      'pointerclick' |
      'contextmenu' |
      'pointerdown' |
      'pointermove' |
      'pointerup' |
      'mouseover' |
      'mouseout' |
      'mouseenter' |
      'mouseleave';
  }>();

  /**
   * jointjs internal dia.Paper.event subject handling
   *
   * Based on: https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
   *
   *    onDiaPaperEvents()
   *             |
   *             ? -> DiaGPaperComponent -> emit()
   *             |
   *             V
   *    NgJointService.jointEventSubject.next()
   *             |
   *             ? -> DiaGPaperComponent -> emit()
   *             |
   *             ? -> DiaGraphComponent -> emit()
   *             |
   *             + -> ShapeService
   *                     |
   *                     + onElementEvents()
   *                     |    |
   *                     |    ?-> GenericElementShapeComponent -> emit()
   *                     |
   *                     + onLinkEvents(..)
   *                          |
   *                          ? -> GenericLinkShapeComponent -> emit()
   *
   */
  onDiaPaperEvents(jointjsPaperObject: dia.Paper) {
    jointjsPaperObject
      .on('element:pointerclick', (context: any) => {
        this.jointEventSubject.next(
          { cid: context.model.cid, eventSource: 'element', eventType: 'pointerclick' }
        );
      })
      ;
  }

}
