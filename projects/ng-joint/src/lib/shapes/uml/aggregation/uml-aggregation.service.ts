import { Injectable } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { UmlAggregation } from './uml-aggregation';
import { ShapesUmlService } from '../shapes-uml.service';

@Injectable({
  providedIn: 'root'
})
export class UmlAggregationService {

  constructor(private service: ShapesUmlService) { }

  createUmlAggregation(
    graphElement: DiaGraphElement,
    id: string,
    sourceId: string,
    targetId: string
  ): UmlAggregation {
    const aggregationShape = new UmlAggregation(
      id,
      sourceId,
      targetId
    );
    graphElement.addLinkShape(aggregationShape);
    return aggregationShape;
  }
}
