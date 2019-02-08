import { Injectable, SimpleChanges } from '@angular/core';

import { DiaGraph } from '../../../dia';
import { LinkShapeService } from '../../shapes';
import { UmlComposition } from './uml-composition';
import { ShapesUmlService } from '../shapes-uml.service';
import { UmlCompositionComponent } from './uml-composition.component';

@Injectable({
  providedIn: 'root'
})
export class UmlCompositionService implements LinkShapeService {

  constructor(private service: ShapesUmlService) { }

  createLinkShape(graphInstance: DiaGraph, component: UmlCompositionComponent): UmlComposition {
    const compositionShape = new UmlComposition(
      component.id,
      component.sourceId,
      component.targetId
    );
    graphInstance.addLink(compositionShape);
    return compositionShape;
  }

  onEvents(component: UmlCompositionComponent) {
    this.service.onLinkEvents(component);
  }

  setChanges(changes: SimpleChanges, component: UmlCompositionComponent) {
    this.service.setLinkChanges(changes, component);
  }

}
