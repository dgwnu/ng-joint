import { dia } from 'jointjs';

import { Subject } from 'rxjs';

import { DiaElement } from '../element';
import { DiaLink } from '../link';

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

  addElement(element: DiaElement) {
    element.jointjsObject.addTo(this._jointjsObject);
  }

  addLink(link: DiaLink) {
    link.jointjsObject.addTo(this._jointjsObject);
  }

}
