import { Injectable, QueryList } from '@angular/core';

import { DiaGraphElement } from '../../dia/dia-graph-element';
import { ElementShapeComponent, LinkShapeComponent } from '../shapes';
import { ShapesService } from '../shapes.service';

@Injectable({
  providedIn: 'root'
})
export class ShapesStandardService {

  constructor(private service: ShapesService) { }

  createShapes(elements: QueryList<ElementShapeComponent>[], links: QueryList<LinkShapeComponent>[], graph: DiaGraphElement) {
    this.service.createShapes(elements, links, graph);
  }

  onElementEvents(component: ElementShapeComponent) {
/*
    component.shape.element
      .on('change:position', (context: any) => {
        this._positionComponent(component);
    } )
      .on('change:size', (context: any) => {
        this._resizeComponent(component);
    } );
*/
  }
}
