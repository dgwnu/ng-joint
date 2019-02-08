import { Injectable, SimpleChanges } from '@angular/core';

import { DiaGraphElement } from '../../../dia/graph/dia-graph';
import { LinkShapeService } from '../../shapes';
import { UmlGeneralization } from './uml-generalization';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlGeneralizationComponent } from './uml-generalization.component';

@Injectable({
  providedIn: 'root'
})
export class UmlGeneralizationService implements LinkShapeService {

  constructor(private service: ShapesUmlService) { }

  createLinkShape(graphElement: DiaGraphElement, component: UmlGeneralizationComponent): UmlGeneralization {
    const generalizationShape = new UmlGeneralization(
      component.id,
      component.sourceId,
      component.targetId
    );
    graphElement.addLinkShape(generalizationShape);
    return generalizationShape;
  }

  onEvents(component: UmlGeneralizationComponent) {
    this.service.onLinkEvents(component);
  }

  setChanges(changes: SimpleChanges, component: UmlGeneralizationComponent) {
    this.service.setLinkChanges(changes, component);
  }

}
