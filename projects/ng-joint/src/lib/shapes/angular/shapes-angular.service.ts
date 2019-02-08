import { Injectable, QueryList, SimpleChanges } from '@angular/core';

import { DiaGraph } from '../../dia/graph';
import { ElementShapeComponent, LinkShapeComponent, DiaShape } from '../shapes';
import { ShapesService } from '../shapes.service';

/**
 * NgJoint Shapes Angular Service Class
 *
 * @comment Manages LifeCycle, Events and Bi-Directional Data-Binding Angular Shapes
 */
@Injectable({
  providedIn: 'root'
})
export class ShapesAngularService {

  constructor(private service: ShapesService) { }

  createShapes(elements: QueryList<ElementShapeComponent>[], links: QueryList<LinkShapeComponent>[], graphInstance: DiaGraph) {
    this.service.createShapes(elements, links, graphInstance);
  }

  setElementChanges(changes: SimpleChanges, component: ElementShapeComponent) {
    this.service.setElementChanges(changes, component);
  }

  setLinkChanges(changes: SimpleChanges, component: LinkShapeComponent) {
    this.service.setLinkChanges(changes, component);
  }

  setAttrProp(diaShape: DiaShape, prop: string, currentValue: {}) {
    this.service.setAttrProp(diaShape, prop, currentValue);
  }

}
