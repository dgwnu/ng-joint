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
        attrs: {
          root: component.root,
          body: component.body,
          label: component.label
        }
      }
    );
    graphElement.addElementShape(rectangleShape);
    return rectangleShape;
  }

  onEvents(component: StandardRectangleComponent) {
    this.service.onElementEvents(component);
  }

  setChanges(changes: SimpleChanges, component: StandardRectangleComponent) {
    if (!component.shape) { return; }
    this.service.setElementChanges(changes, component);

    const element = component.shape.element;
    const attrs = element.attributes['attrs'];

    for (const prop in changes) {
      if (changes.hasOwnProperty(prop)) {
        const currentValue: {} = changes[prop].currentValue;
        const previousValue: {} = attrs[prop];
        if (currentValue !== previousValue) {
          for (const attr in currentValue) {
            if (currentValue.hasOwnProperty(attr)) {
              element.attr(prop + '/' + attr, currentValue[attr]);
            }
          }
        }
      }
    }

    console.log(element.attributes);
  }

}
