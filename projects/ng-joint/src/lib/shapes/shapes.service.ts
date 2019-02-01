import { Injectable, QueryList } from '@angular/core';

import { DiaGraphElement } from '../dia/dia-graph-element';
import { ShapePlugin, ElementShapeComponent, LinkShapeComponent } from './shapes';

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

}
