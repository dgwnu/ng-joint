import { Injectable, SimpleChanges } from '@angular/core';

import { shapes } from 'jointjs';

import { ElementShapeComponent, LinkShapeComponent, ShapePluginService } from '../shapes';
import { GenericStandardElementShapeComponent, GenericStandardLinkShapeComponent } from './shapes-standard';
import { ShapesService } from '../shapes.service';
import { ShapesStandardComponent } from '../../schematic-generated/standard';

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

  elementShapeOptions<T extends GenericStandardElementShapeComponent>(component: T) {
    return {
      position: { x: component.x, y: component.y },
      size: { width: component.width, height: component.height },
      attrs: {
        root: component.root,
        body: component['body'],
        label: component['label']
      }
    };
  }

  configElementShape<T extends GenericStandardElementShapeComponent>(component: T) {
    component.graphInstance.addElement(component.shapeInstance);
  }

  linkShapeOptions<T extends GenericStandardLinkShapeComponent>(component: T) {
    return undefined;
  }

  configLinkShape<T extends GenericStandardLinkShapeComponent>(component: T) {
    if (component.line) {
      this.service.setAttrProp(component.shapeInstance.jointjsObject, 'line', component.line);
    }
    if (component['outline']) {
      this.service.setAttrProp(component.shapeInstance.jointjsObject, 'outline', component['outline']);
    }

    component.graphInstance.addLink(component.shapeInstance);
  }

}
