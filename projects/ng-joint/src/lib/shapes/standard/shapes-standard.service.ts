import { Injectable, SimpleChanges } from '@angular/core';

import { attributes } from 'jointjs';

import { ElementShapeComponent, LinkShapeComponent, DiaShape, ShapePluginService } from '../shapes';
import { StandardElementShape, StandardLinkShape } from './shapes-standard';
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

  setElementChanges(changes: SimpleChanges, component: ElementShapeComponent) {
    this.service.setElementChanges(changes, component);
  }

  setLinkChanges(changes: SimpleChanges, component: LinkShapeComponent) {
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

  configElementShape(elementShape: StandardElementShape, properties: {}) {
    if (elementShape && properties) {
      // PM (additional config...)
    }
  }

  configLinkShape(linkShape: StandardLinkShape, properties: { line?: attributes.SVGPathAttributes }) {
    if (properties.line) {
      this.service.setAttrProp(linkShape.jointjsObject, 'line', properties.line);
    }
  }

}
