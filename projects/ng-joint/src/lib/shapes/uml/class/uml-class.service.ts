import { Injectable, SimpleChanges } from '@angular/core';

import { DiaGraph } from '../../../dia';
import { ElementShapeService } from '../../shapes';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlClass } from './uml-class';
import { UmlClassComponent } from './uml-class.component';

@Injectable({
  providedIn: 'root'
})
export class UmlClassService implements ElementShapeService {

  constructor(private service: ShapesUmlService) { }

  createElementShape(graphInstance: DiaGraph, component: UmlClassComponent): UmlClass {
    const classShape = new UmlClass(component.id, this.service.umlClassAttributes(component));
    graphInstance.addElement(classShape);
    return classShape;
  }

  onEvents(component: UmlClassComponent) {
    this.service.onElementEvents(component);
  }

  setChanges(changes: SimpleChanges, component: UmlClassComponent) {
    this.service.setElementChanges(changes, component);
  }

}
