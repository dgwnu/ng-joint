import { Injectable, SimpleChanges } from '@angular/core';

import { DiaGraph } from '../../../dia/graph';
import { ElementShapeService } from '../../shapes';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlInterface } from './uml-interface';
import { UmlInterfaceComponent } from './uml-interface.component';

@Injectable({
  providedIn: 'root'
})
export class UmlInterfaceService implements ElementShapeService {

  constructor(private service: ShapesUmlService) { }

  createElementShape(graphInstance: DiaGraph, component: UmlInterfaceComponent): UmlInterface {
    const interfaceShape = new UmlInterface(component.id, this.service.umlClassAttributes(component));
    graphInstance.addElement(interfaceShape);
    return interfaceShape;
  }

  onEvents(component: UmlInterfaceComponent) {
    this.service.onElementEvents(component);
  }

  setChanges(changes: SimpleChanges, component: UmlInterfaceComponent) {
    this.service.setElementChanges(changes, component);
  }

}
