import { Injectable, SimpleChanges } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { ElementShapeService } from '../../shapes';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlAbstract } from './uml-abstract';
import { UmlAbstractComponent } from './uml-abstract.component';

@Injectable({
  providedIn: 'root'
})
export class UmlAbstractService implements ElementShapeService {

  constructor(private service: ShapesUmlService) { }

  createElementShape(graphElement: DiaGraphElement, component: UmlAbstractComponent): UmlAbstract {
    const abstractShape = new UmlAbstract(component.id, this.service.umlClassAttributes(component));
    graphElement.addElementShape(abstractShape);
    return abstractShape;
  }

  onEvents(component: UmlAbstractComponent) {
    this.service.onElementEvents(component);
  }

  setChanges(changes: SimpleChanges, component: UmlAbstractComponent) {
    this.service.setElementChanges(changes, component);
  }

}
