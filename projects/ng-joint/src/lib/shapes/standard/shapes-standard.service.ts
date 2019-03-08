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
    // generic shape options
    const options = {
      position: { x: component.x, y: component.y },
      size: { width: component.width, height: component.height },
      attrs: { root: component.root }
    };

    // custom shape options
    const attrsMetaData = component.shapePropertiesMetaData.filter(dataEl => dataEl['type'] === 'attrs');
    /*
    for (const attrDataEl of attrsMetaData) {
      const key: string = attrDataEl['key'];
      options.attrs[key] = component[key];
    }
    */
    return options;
  }

  configElementShape<T extends GenericStandardElementShapeComponent>(component: T) {
    // shape attrs config
    const shape = component.shapeInstance.jointjsObject;

    for (const prop in shape.attributes.attrs) {
      if (component[prop]) {
        this.service.setAttrProp(shape, prop, component[prop]);
      }
    }

    // shape extra config
    console.log('attributes', component.shapeInstance.jointjsObject.attributes.attrs);

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
