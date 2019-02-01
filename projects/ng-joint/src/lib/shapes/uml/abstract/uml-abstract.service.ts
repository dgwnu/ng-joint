import { Injectable } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { UmlNameType } from '../shapes-uml';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlAbstract } from './uml-abstract';

@Injectable({
  providedIn: 'root'
})
export class UmlAbstractService {

  constructor(private service: ShapesUmlService) { }

  createUmlAbstract(
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
    ): UmlAbstract {
    const name = this.service.formatName(unformatedName);
    const attributes = this.service.formatAttributes(unformatedAttributes);
    const methods = this.service.formatMethods(unfomatedMethods);
    const abstractShape = new UmlAbstract(
      id,
      {
        position: { x: x, y: y },
        size: { width: width, height: height },
        name,
        attributes,
        methods,
        attrs
      }
    );
    graphElement.addElementShape(abstractShape);
    return abstractShape;
  }

}
