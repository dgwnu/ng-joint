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

  private _positionElement(component: ElementShapeComponent) {
    const shape = component.shape;
    const xShapeElement = shape.element.getBBox().x;
    const yShapeElement = shape.element.getBBox().y;
    const xChangeDetected = (component.x !== xShapeElement);
    const yChangedDetected = (component.y !== yShapeElement);
    console.log('_positionComponen.component.x', component.x);
    console.log('_positionComponen.xShapeElement', xShapeElement);

    if (xChangeDetected) {
      component.x = xShapeElement;
      console.log('_positionComponen.x'); 
    }
    if (yChangedDetected) {
      component.y = yShapeElement;
      console.log('_positionComponen.y');
    }
  }

  private _resizeElement(component: ElementShapeComponent) {
    const shape = component.shape;
    const widthShapeElement = shape.element.getBBox().width;
    const heightShapeElement = shape.element.getBBox().height;
    const widthChangeDetected = (component.width !== widthShapeElement);
    const heightChangedDetected = (component.height !== heightShapeElement);

    if (widthChangeDetected) {
      component.width = widthShapeElement;
      console.log('_resizeComponent.width');
    }
    if (heightChangedDetected) {
      component.height = heightShapeElement;
      console.log('_resizeComponent.height');
    }
  }

  onElementEvents(component: ElementShapeComponent) {

    component.shape.element
      .on('change:position', (context: any) => {
        this._positionElement(component);
    } )
      .on('change:size', (context: any) => {
        this._resizeElement(component);
    } );

  }
}
