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

  elementShapeOptions(component: GenericStandardElementShapeComponent) {
    return this.service.elementShapeOptions(component);
  }

  configElementShape<T extends GenericStandardElementShapeComponent>(component: T) {
    // shape attrs config
    this.service.configShapeAttrs(component);

    // Cylinder shape extra config
    if (component.shapeInstance.jointjsObject instanceof shapes.standard.Cylinder && component['topRy']) {
      // jointjs.shapes.Cylinder extra config
      const t: string | number = component['topRy'];
      const cylinder = component.shapeInstance.jointjsObject as shapes.standard.Cylinder;
      cylinder.topRy(t);
      console.log('cylinder', cylinder);
    }

    // shape generic config
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
