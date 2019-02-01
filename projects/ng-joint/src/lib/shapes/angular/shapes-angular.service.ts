import { Injectable, QueryList } from '@angular/core';

import { DiaGraphElement } from '../../dia/dia-graph-element';
import { ElementShapeComponent, LinkShapeComponent } from '../shapes';
import { ShapesService } from '../shapes.service';

@Injectable({
  providedIn: 'root'
})
export class ShapesAngularService {

  constructor(private service: ShapesService) { }

  createShapes(elements: QueryList<ElementShapeComponent>[], links: QueryList<LinkShapeComponent>[], graph: DiaGraphElement) {
    this.service.createShapes(elements, links, graph);
  }

}
