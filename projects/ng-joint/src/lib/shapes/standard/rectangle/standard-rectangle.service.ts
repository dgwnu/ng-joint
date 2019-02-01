import { Injectable } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { ShapesStandardService } from '../shapes-standard.service';
import { StandardRectangle } from './standard-rectangle';

@Injectable({
  providedIn: 'root'
})
export class StandardRectangleService {

  constructor(private service: ShapesStandardService ) { }

  createStandardRectangle(
    graphElement: DiaGraphElement,
    id: string,
    x: number,
    y: number,
    width: number,
    height: number,
    body: {},
    label: {}
    ): StandardRectangle {
    const rectangleShape = new StandardRectangle(
      id,
      {
        position: { x: x, y: y },
        size: { width: width, height: height },
        attrs: {
          body: body,
          label: label
        }
      }
    );
    graphElement.addElementShape(rectangleShape);
    return rectangleShape;
  }

}
