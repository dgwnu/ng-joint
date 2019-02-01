import { Injectable, SimpleChanges,  } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { ElementShapeService } from '../../shapes';
import { ShapesStandardService } from '../shapes-standard.service';
import { StandardRectangle } from './standard-rectangle';
import { StandardRectangleComponent } from './standard-rectangle.component';

@Injectable({
  providedIn: 'root'
})
export class StandardRectangleService implements ElementShapeService {

  constructor(private service: ShapesStandardService) {}

  createElementShape(
    graphElement: DiaGraphElement,
    component: StandardRectangleComponent
  ): StandardRectangle {
    const rectangleShape = new StandardRectangle(
      component.id,
      {
        position: { x: component.x, y: component.y },
        size: { width: component.width, height: component.height },
        attrs: component.attrs
      }
    );
    graphElement.addElementShape(rectangleShape);
    return rectangleShape;
  }

  onEvents(component: StandardRectangleComponent) {
    this.service.onElementEvents(component);
  }

  setChanges(changes: SimpleChanges, component: StandardRectangleComponent) {
    this.service.setElementChanges(changes, component);
    const element = component.shape.element;
    console.log('StandardRectangleService.setChanges', element);
    /*
    rootTitle?: string;
    bodyFill?: string;
    bodyFillOpacity?: number;
    labelText?: string;
    */
  }

}
