import { Injectable, QueryList } from '@angular/core';

import { DiaGraphElement } from '../../dia/dia-graph-element';
import { ElementShapeComponent, LinkShapeComponent } from '../shapes';
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

}
