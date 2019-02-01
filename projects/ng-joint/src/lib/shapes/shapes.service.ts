import { Injectable, QueryList, SimpleChanges } from '@angular/core';

import { DiaGraphElement } from '../dia/dia-graph-element';
import {
  ShapePlugin,
  ElementShapeComponent,
  LinkShapeComponent,
  ElementShapeEventHandler
} from './shapes';

/**
 * Shapes Registration Service Class
 * Manages LifeCycle of Shapes
 */
@Injectable({
  providedIn: 'root'
})
export class ShapesService {

  constructor() {}

  /**
   * Activate Ng Joint JS Shape Plugins (Standard, Angular, ...)
   */
  activateShapePlugins(shapePlugins: ShapePlugin[], graphElement: DiaGraphElement) {
    for (const shapePlugin of shapePlugins) {
      if (shapePlugin) { shapePlugin.graphElement = graphElement; }
    }
  }

  /**
   * Create Ng Joint Js Shapes (Elements and Links) for Declared Components
   */
  createShapes(elements: QueryList<ElementShapeComponent>[], links: QueryList<LinkShapeComponent>[], graph: DiaGraphElement) {
    // Firstly, create elements
    for (const element of elements) {
      element.forEach(elementShape => {
        elementShape.createShape(graph);
      });
    }
    // Secondly, create links and connect them between the elements
    for (const link of links) {
      link.forEach(linkShape => {
        // create link shape
        linkShape.createShape(graph);

        // connect link to elements
        for (const element of elements) {

          // connect source element
          const source = element.find(elementShape => elementShape.id === linkShape.sourceId);
          if (source) {
            linkShape.sourceShape = source.shape;
          }

          // connect target element
          const target = element.find(elementShape => elementShape.id === linkShape.targetId);
          if (target) {
            linkShape.targetShape = target.shape;
          }

        }
      });
    }

  }

  private _positionComponent(component: ElementShapeComponent) {
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

  private _sizeComponent(component: ElementShapeComponent) {
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
      .on('change:position', (context: any) => { this._positionComponent(component); })
      .on('change:size', (context: any) => { this._sizeComponent(component);
    });
  }

  setElementChanges(changes: SimpleChanges, component: ElementShapeComponent) {
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
