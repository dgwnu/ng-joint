import { Injectable, SimpleChanges } from '@angular/core';

import { DiaGraph } from '../../../dia';
import { LinkShapeService } from '../../shapes';
import { UmlGeneralization } from './uml-generalization';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlGeneralizationComponent } from './uml-generalization.component';

@Injectable({
  providedIn: 'root'
})
export class UmlGeneralizationService implements LinkShapeService {

  constructor(private service: ShapesUmlService) { }

  createLinkShape(graphInstance: DiaGraph, component: UmlGeneralizationComponent): UmlGeneralization {
    const generalizationShape = new UmlGeneralization(
      component.id,
      component.sourceId,
      component.targetId
    );
    graphInstance.addLink(generalizationShape);
    return generalizationShape;
  }

  onEvents(component: UmlGeneralizationComponent) {
    this.service.onLinkEvents(component);
  }

  setChanges(changes: SimpleChanges, component: UmlGeneralizationComponent) {
    this.service.setLinkChanges(changes, component);
  }

}
