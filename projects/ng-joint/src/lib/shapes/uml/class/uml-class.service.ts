import { Injectable } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { UmlNameType } from '../shapes-uml';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlClass } from './uml-class';

@Injectable({
  providedIn: 'root'
})
export class UmlClassService {

  constructor(private service: ShapesUmlService) { }

  createUmlClass(
    graphElement: DiaGraphElement,
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    unformatedName: UmlNameType,
    unformatedAttributes?: string[],
    unfomatedMethods?: string[],
    attrs?: {}
    ): UmlClass {
    const name = this.service.formatName(unformatedName);
    const attributes = this.service.formatAttributes(unformatedAttributes);
    const methods = this.service.formatMethods(unfomatedMethods);
    const classShape = new UmlClass(
      id,
      {
        position: { x: x, y: y },
        size: { width: width, height: height },
        name, attributes, methods, attrs
      }
    );
    graphElement.addElementShape(classShape);
    return classShape;
  }

}
