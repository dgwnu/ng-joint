import { Injectable, SimpleChanges } from '@angular/core';

import { DiaGraph } from '../../../dia/graph';
import { ElementShapeService } from '../../shapes';
import { ShapesAngularService } from '../shapes-angular.service';
import { AngularElement } from './angular-element';
import { AngularElementComponent } from './angular-element.component';

@Injectable({
  providedIn: 'root'
})
export class AngularElementService implements ElementShapeService {

  constructor(private service: ShapesAngularService) { }

  onEvents(component: AngularElementComponent) {
    this.service.onElementEvents(component);
  }

  setChanges(changes: SimpleChanges, component: AngularElementComponent) {
    this.service.setElementChanges(changes, component);
  }

  /**
   * create new Angular Element (that renders Angular Element in joinjs BBOX)
   */
  createElementShape(graphInstance: DiaGraph, component: AngularElementComponent): AngularElement {
    const elementShape = new AngularElement(
      component.id,
      this.service.elementShapeOptions(component)
    );
    this.service.configElementShape(component);
    return elementShape;
  }

}
