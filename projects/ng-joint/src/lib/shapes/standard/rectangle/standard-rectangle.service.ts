import { Injectable, SimpleChanges,  } from '@angular/core';

import { DiaGraph } from '../../../dia/graph';
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
    graphInstance: DiaGraph,
    component: StandardRectangleComponent
  ): StandardRectangle {
    const rectangleShape = new StandardRectangle(
      component.id,
      this.service.buildElementOptions(component)
    );
    graphInstance.addElement(rectangleShape);
    return rectangleShape;
  }

  onEvents(component: StandardRectangleComponent) {
    this.service.onElementEvents(component);
  }

  setChanges(changes: SimpleChanges, component: StandardRectangleComponent) {
    this.service.setElementChanges(changes, component);
  }

}
