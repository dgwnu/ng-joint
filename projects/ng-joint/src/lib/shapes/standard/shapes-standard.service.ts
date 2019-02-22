import { Injectable, SimpleChanges } from '@angular/core';

import { attributes } from 'jointjs';

import { ElementShapeComponent, LinkShapeComponent, DiaShape, ShapePluginService } from '../shapes';
import {
  StandardLinkShape,
  GenericStandardElementShapeComponent,
  GenericStandardLinkShapeComponent
} from './shapes-standard';
import { ShapesService } from '../shapes.service';
import { ShapesStandardComponent } from './shapes-standard.component';

@Injectable({
  providedIn: 'root'
})
export class ShapesStandardService implements ShapePluginService {

  constructor(private service: ShapesService) { }

  initShapePluginComponent(component: ShapesStandardComponent) {
    this.service.initShapePluginComponent(component);
  }

  onElementEvents(component: ElementShapeComponent) {
    this.service.onElementEvents(component);
  }

  onLinkEvents(component: LinkShapeComponent) {
    this.service.onLinkEvents(component);
  }

  setElementChanges(changes: SimpleChanges, component: GenericStandardElementShapeComponent) {
    this.service.setElementChanges(changes, component);
  }

  setLinkChanges(changes: SimpleChanges, component: GenericStandardLinkShapeComponent) {
    this.service.setLinkChanges(changes, component);
  }

  elementShapeOptions(properties: {
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

  configElementShape<T extends GenericStandardElementShapeComponent>(component: T) {
    component.graphInstance.addElement(component.shapeInstance);
  }

  configLinkShape<T extends GenericStandardLinkShapeComponent>(component: T) {
    if (component.line) {
      this.service.setAttrProp(component.shapeInstance.jointjsObject, 'line', component.line);
    }

    component.graphInstance.addLink(component.shapeInstance);
  }

}
