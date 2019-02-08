import { dia } from 'jointjs';

import { Subject } from 'rxjs';

import { ElementShape, LinkShape } from '../../shapes/shapes';

/**
 * JointNg Graph Class
 */
export class DiaGraph {
  /** jointjs graph object instance */
  get jointjsObject(): dia.Graph {
    return this._jointjsObject;
  }

  /** @ignore */
  constructor() {
    this._jointjsObject = new dia.Graph();
  }

  /** @ignore */
  private _jointjsObject: dia.Graph;

  /** jointjs internal events subjects */
  jointEvent = new Subject<{
    cid: string,
    eventSource: 'element'
    eventType: 'pointerclick'
  }>();

  addElementShape(elementShape: ElementShape) {
    elementShape.element.addTo(this._jointjsObject);
  }

  addLinkShape(linkShape: LinkShape) {
    linkShape.link.addTo(this._jointjsObject);
  }

}
