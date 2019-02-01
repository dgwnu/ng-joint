import { Injectable } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { UmlImplementation } from './uml-implementation';
import { ShapesUmlService } from '../shapes-uml.service';

@Injectable({
  providedIn: 'root'
})
export class UmlImplementationService {

  constructor(private service: ShapesUmlService) { }

  createUmlImplementation(
    graphElement: DiaGraphElement,
    id: string,
    sourceId: string,
    targetId: string
  ): UmlImplementation {
    const implementationShape = new UmlImplementation(
      id,
      sourceId,
      targetId
    );
    graphElement.addLinkShape(implementationShape);
    return implementationShape;
  }
}