import { Injectable, QueryList, SimpleChanges } from '@angular/core';

import { DiaGraphElement } from '../../dia/dia-graph-element';
import { ElementShapeComponent, LinkShapeComponent, DiaShape } from '../shapes';
import { ShapesService } from '../shapes.service';
import { UmlNameType } from './shapes-uml';

@Injectable({
  providedIn: 'root'
})
export class ShapesUmlService {

  constructor(private service: ShapesService) { }

  createShapes(elements: QueryList<ElementShapeComponent>[], links: QueryList<LinkShapeComponent>[], graph: DiaGraphElement) {
    this.service.createShapes(elements, links, graph);
  }

  _formatUndefinedStringArray(stringArray?: string[]): string[] {
    if (stringArray) {
      return stringArray;
    } else {
      return [];
    }
  }

  formatAttributes(attributes?: string[]): string[] {
    return this._formatUndefinedStringArray(attributes);
  }

  formatMethods(methods?: string[]): string[] {
    return this._formatUndefinedStringArray(methods);
  }

  formatName(name: UmlNameType): string[] {
    if (typeof name === 'string') {
      return [name];
    } else {
      return name;
    }
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
