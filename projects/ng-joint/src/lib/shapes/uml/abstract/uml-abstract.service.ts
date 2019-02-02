import { Injectable } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { UmlNameType } from '../shapes-uml';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlAbstract } from './uml-abstract';
import { UmlAbstractComponent } from './uml-abstract.component';

@Injectable({
  providedIn: 'root'
})
export class UmlAbstractService {

  constructor(private service: ShapesUmlService) { }

  createUmlAbstract(
    graphElement: DiaGraphElement,
    component: UmlAbstractComponent
    ): UmlAbstract {
    const abstractShape = new UmlAbstract(
      component.id,
      {
        position: { x: component.x, y: component.y },
        size: { width: component.width, height: component.height },
        this.service.formatName(component.name),
        this.service.formatName(component.attributes),
        this.service.formatName(component.methods),
        this.service.formatName(component.attrs)
      }
    );
    graphElement.addElementShape(abstractShape);
    return abstractShape;
  }

}
