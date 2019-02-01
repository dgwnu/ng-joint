import { dia } from 'jointjs';

import { ElementShape, LinkShape } from '../shapes/shapes';

/**
 * Indexable Holder of Joint Graph Object
 */
export class DiaGraphElement {

  constructor() {
    this._graph = new dia.Graph();
  }

  private _graph: dia.Graph;

  get graph(): dia.Graph {
    return this._graph;
  }

  addElementShape(elementShape: ElementShape) {
    elementShape.element.addTo(this._graph);
  }

  addLinkShape(linkShape: LinkShape) {
    linkShape.link.addTo(this._graph);
  }

}
