import { Injectable } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { UmlComposition } from './uml-composition';
import { ShapesUmlService } from '../shapes-uml.service';

@Injectable({
  providedIn: 'root'
})
export class UmlCompositionService {

  constructor(private service: ShapesUmlService) { }

  createUmlComposition(
    graphElement: DiaGraphElement,
    id: string,
    sourceId: string,
    targetId: string
  ): UmlComposition {
    const compositionShape = new UmlComposition(
      id,
      sourceId,
      targetId
    );
    graphElement.addLinkShape(compositionShape);
    return compositionShape;
  }
}
