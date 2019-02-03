import { Injectable, SimpleChanges } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { LinkShapeService } from '../../shapes';
import { UmlImplementation } from './uml-implementation';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlImplementationComponent } from './uml-implementation.component';

@Injectable({
  providedIn: 'root'
})
export class UmlImplementationService implements LinkShapeService {

  constructor(private service: ShapesUmlService) { }

  createLinkShape(graphElement: DiaGraphElement, component: UmlImplementationComponent): UmlImplementation {
    const generalizationShape = new UmlImplementation(
      component.id,
      component.sourceId,
      component.targetId
    );
    graphElement.addLinkShape(generalizationShape);
    return generalizationShape;
  }

  onEvents(component: UmlImplementationComponent) {
    this.service.onLinkEvents(component);
  }

  setChanges(changes: SimpleChanges, component: UmlImplementationComponent) {
    this.service.setLinkChanges(changes, component);
  }

}
