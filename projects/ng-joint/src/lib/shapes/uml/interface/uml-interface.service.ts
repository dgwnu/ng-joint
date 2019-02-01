import { Injectable } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { UmlNameType } from '../shapes-uml';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlInterface } from './uml-interface';

@Injectable({
  providedIn: 'root'
})
export class UmlInterfaceService {

  constructor(private service: ShapesUmlService) { }

  createUmlInterface(
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
    ): UmlInterface {
    const name = this.service.formatName(unformatedName);
    const attributes = this.service.formatAttributes(unformatedAttributes);
    const methods = this.service.formatMethods(unfomatedMethods);
    const interfaceShape = new UmlInterface(
      id,
      {
        position: { x: x, y: y },
        size: { width: width, height: height },
        name, attributes, methods, attrs
      }
    );
    graphElement.addElementShape(interfaceShape);
    return interfaceShape;
  }

}
