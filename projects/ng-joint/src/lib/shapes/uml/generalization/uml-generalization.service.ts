import { Injectable } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { UmlGeneralization } from './uml-generalization';
import { ShapesUmlService } from '../shapes-uml.service';

@Injectable({
  providedIn: 'root'
})
export class UmlGeneralizationService {

  constructor(private service: ShapesUmlService) { }

  createUmlGeneralization(
    graphElement: DiaGraphElement,
    id: string,
    sourceId: string,
    targetId: string
  ): UmlGeneralization {
    const generalizationShape = new UmlGeneralization(
      id,
      sourceId,
      targetId
    );
    graphElement.addLinkShape(generalizationShape);
    return generalizationShape;
  }
}
