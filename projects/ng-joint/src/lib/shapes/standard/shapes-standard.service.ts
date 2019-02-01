import { Injectable, QueryList, SimpleChanges } from '@angular/core';

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
    this.service.onElementEvents(component);
  }

  setChanges(changes: SimpleChanges, component: ElementShapeComponent) {
    const shape = component.shape;
    if (!shape) { return; } // first time changes is before shape is created

    const bbox = shape.element.getBBox();

    // detect position change
    let positionChangeDetected = false;
    if (changes.x) {
      if (changes.x.currentValue !== bbox.x) { positionChangeDetected = true; }
    } else if (changes.y) {
      if (changes.y.currentValue !== bbox.y) { positionChangeDetected = true; }
    }
    // detect size change
    let sizeChangeDetected = false;
    if (changes.width) {
      if (changes.width.currentValue !== bbox.width) { sizeChangeDetected = true; }
    } else if (changes.height) {
      if (changes.height.currentValue !== bbox.height) { sizeChangeDetected = true; }
    }

    // process detected changes
    if (positionChangeDetected) {
        component.shape.element.position(component.x, component.y);
        console.log('onShapeChanges.position');
    }
    if (sizeChangeDetected) {
        component.shape.element.resize(component.width, component.height);
        console.log('onShapeChanges.resize');
    }

  }

}
