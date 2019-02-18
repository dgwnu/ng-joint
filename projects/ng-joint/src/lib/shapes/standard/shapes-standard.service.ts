import { Injectable, QueryList, SimpleChanges } from '@angular/core';

import { DiaGraph } from '../../dia/graph';
import { ElementShapeComponent, LinkShapeComponent, DiaShape } from '../shapes';
import { ShapesService } from '../shapes.service';
import { GenericStandardElementShapeComponent, GenericStandardLinkShapeComponent } from './shapes-standard';
import { ShapesStandardComponent } from './shapes-standard.component';

@Injectable({
  providedIn: 'root'
})
export class ShapesStandardService {

  constructor(private service: ShapesService) { }

  initShapes(component: ShapesStandardComponent) {
    const elements: QueryList<GenericStandardElementShapeComponent>[] = [];
    const links: QueryList<GenericStandardLinkShapeComponent>[] = [];

    for (const key in component) {
      if (component[key] instanceof QueryList) {
        const listObject = component[key]['first'];
        if (listObject) {
          if (listObject instanceof GenericStandardElementShapeComponent) {
            elements.push(component[key]);
          }
          if (listObject instanceof GenericStandardLinkShapeComponent) {
            links.push(component[key]);
          }
        }
      }
    }
    console.log('elements', elements);
    console.log('links', links);
  }

  createShapes(
    elements: QueryList<GenericStandardElementShapeComponent>[],
    links: QueryList<GenericStandardLinkShapeComponent>[],
    graphInstance: DiaGraph
  ) {
    this.service.createShapes(elements, links, graphInstance);
  }

  onElementEvents(component: ElementShapeComponent) {
    this.service.onElementEvents(component);
  }

  onLinkEvents(component: LinkShapeComponent) {
    this.service.onLinkEvents(component);
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

  buildElementOptions(properties: {
    x: number, y: number, width: number, height: number,
    root?: {},
    label?: {},
    body?: {};
  }) {
    return {
      position: { x: properties.x, y: properties.y },
      size: { width: properties.width, height: properties.height },
      attrs: {
        root: properties.root,
        body: properties.body,
        label: properties.label
      }
    };
  }

}
