import { Injectable, SimpleChanges } from '@angular/core';

import { shapes } from 'jointjs';

import { ElementShapeComponent, LinkShapeComponent, DiaShape, ShapePluginService } from '../shapes';
import { ShapesService } from '../shapes.service';
import { UmlNameType, GenericUmlClassShapeComponent } from './shapes-uml';
import { ShapesUmlComponent } from './shapes-uml.component';

@Injectable({
  providedIn: 'root'
})
export class ShapesUmlService implements ShapePluginService {

  constructor(private service: ShapesService) { }

  initShapePluginComponent(component: ShapesUmlComponent) {
    this.service.initShapePluginComponent(component);
  }

  private _formatUndefinedStringArray(stringArray?: string[]): string[] {
    if (stringArray) {
      return stringArray;
    } else {
      return [];
    }
  }

  private _formatName(name: UmlNameType): string[] {
    if (typeof name === 'string') {
      return [name];
    } else {
      return name;
    }
  }

  umlClassAttributes(component: GenericUmlClassShapeComponent): shapes.uml.ClassAttributes {
    return {
      position: { x: component.x, y: component.y },
      size: { width: component.width, height: component.height },
      name: this._formatName(component.name),
      attributes: this._formatUndefinedStringArray(component.attributes),
      methods: this._formatUndefinedStringArray(component.methods),
      attrs: component.attrs
    };
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

}
