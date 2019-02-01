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
          body: component.body,
          label: component.label
        }
      }
    );
    graphElement.addElementShape(rectangleShape);
    return rectangleShape;
  }

  private _positionComponent(component: StandardRectangleComponent) {
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

  private _resizeComponent(component: StandardRectangleComponent) {
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

  onEvents(component: StandardRectangleComponent) {
    this.service.onElementEvents(component);
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

  setChanges(changes: SimpleChanges, component: StandardRectangleComponent) {
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
