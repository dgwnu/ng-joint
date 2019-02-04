import { dia } from 'jointjs';

import { Subject } from 'rxjs';

import { ElementShape, LinkShape } from '../shapes/shapes';

/**
 * JointNg Graph Class
 */
export class DiaGraphElement {
  /** jointjs graph object instance */
  get graph(): dia.Graph {
    return this._graph;
  }

  /** @ignore */
  constructor() {
    this._graph = new dia.Graph();
  }

  /** @ignore */
  private _graph: dia.Graph;

  /** jointjs internal events subjects */
  jointEvent = new Subject<{
    cid: string,
    eventSource: 'element'
    eventType: 'pointerclick'
  }>();

  addElementShape(elementShape: ElementShape) {
    elementShape.element.addTo(this._graph);
  }

  addLinkShape(linkShape: LinkShape) {
    linkShape.link.addTo(this._graph);
  }

}
