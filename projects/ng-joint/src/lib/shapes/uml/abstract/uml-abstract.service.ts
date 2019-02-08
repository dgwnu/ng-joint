import { Injectable, SimpleChanges } from '@angular/core';

import { DiaGraph } from '../../../dia';
import { ElementShapeService } from '../../shapes';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlAbstract } from './uml-abstract';
import { UmlAbstractComponent } from './uml-abstract.component';

@Injectable({
  providedIn: 'root'
})
export class UmlAbstractService implements ElementShapeService {

  constructor(private service: ShapesUmlService) { }

  createElementShape(graphInstance: DiaGraph, component: UmlAbstractComponent): UmlAbstract {
    const abstractShape = new UmlAbstract(component.id, this.service.umlClassAttributes(component));
    graphInstance.addElement(abstractShape);
    return abstractShape;
  }

  onEvents(component: UmlAbstractComponent) {
    this.service.onElementEvents(component);
  }

  setChanges(changes: SimpleChanges, component: UmlAbstractComponent) {
    this.service.setElementChanges(changes, component);
  }

}
