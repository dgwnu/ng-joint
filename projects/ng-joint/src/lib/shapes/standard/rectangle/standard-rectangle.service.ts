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

    if (changes.label) {
      const currentLabel: {} = changes.label.currentValue;
      const previousLabel: {} = attrs['label'];
      if (currentLabel !== previousLabel) {
        for (const attr in currentLabel) {
          if (currentLabel.hasOwnProperty(attr)) {
            element.attr('label/' + attr, currentLabel[attr]);
          }
        }
      }
    }


    console.log(element.attributes);
  }

}
