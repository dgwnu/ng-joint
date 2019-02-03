import { Injectable, SimpleChanges } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { ElementShapeService } from '../../shapes';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlClass } from './uml-class';
import { UmlClassComponent } from './uml-class.component';

@Injectable({
  providedIn: 'root'
})
export class UmlClassService implements ElementShapeService {

  constructor(private service: ShapesUmlService) { }

  createElementShape(graphElement: DiaGraphElement, component: UmlClassComponent): UmlClass {
    const classShape = new UmlClass(
      component.id,
      this.service.umlClassAttributes(component)
    );
    graphElement.addElementShape(classShape);
    return classShape;
  }

  onEvents(component: UmlClassComponent) {
    this.service.onElementEvents(component);
  }

  setChanges(changes: SimpleChanges, component: UmlClassComponent) {
    this.service.setElementChanges(changes, component);
  }

}
