import { Injectable, SimpleChanges } from '@angular/core';

import { ElementShapeService } from '../../shapes';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlAbstract } from './uml-abstract';
import { UmlAbstractComponent } from './uml-abstract.component';

@Injectable({
  providedIn: 'root'
})
export class UmlAbstractService implements ElementShapeService {

  constructor(private service: ShapesUmlService) { }

  createElementShape(component: UmlAbstractComponent): UmlAbstract {
    const abstractShape = new UmlAbstract(
      component.id, this.service.elementShapeOptions(component));
    this.service.configElementShape(component);
    return abstractShape;
  }

  onEvents(component: UmlAbstractComponent) {
    this.service.onElementEvents(component);
  }

  setChanges(changes: SimpleChanges, component: UmlAbstractComponent) {
    this.service.setElementChanges(changes, component);
  }

}
