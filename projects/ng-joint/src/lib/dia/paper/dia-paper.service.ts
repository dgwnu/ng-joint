import { Injectable } from '@angular/core';

import { dia } from 'jointjs';

import { NgJointService } from '../../ng-joint.service';
import { DiaPaper } from './dia-paper';
import { DiaPaperComponent } from './dia-paper.component';

/**
 * Angular Joint Dia Paper Service:
 */
@Injectable({
  providedIn: 'root'
})
export class DiaPaperService {

  constructor(private service: NgJointService) {}

  createPaper(options: dia.Paper.Options): DiaPaper {
    return new DiaPaper(options);
  }

  /**
   * NgJoint Component Event handling
   */
  onComponentEvents(component: DiaPaperComponent) {
    /*
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
      */

    // handling of internal joinjs dia.Paper object events => Angular Emitors
    this.service.onDiaPaperEvents(component.paperInstance.jointjsObject);
  }

}
