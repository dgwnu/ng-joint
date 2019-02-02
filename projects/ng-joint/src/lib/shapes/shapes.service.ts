import { Injectable, QueryList, SimpleChanges } from '@angular/core';

import { DiaGraphElement } from '../dia/dia-graph-element';
import {
  ShapePlugin,
  GenericShape,
  ElementShape,
  LinkShape,
  ElementShapeComponent,
  LinkShapeComponent
} from './shapes';
import { dia } from 'jointjs';

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

    if (xChangeDetected) {
      component.x = xShapeElement;
    }
    if (yChangedDetected) {
      component.y = yShapeElement;
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
    }
    if (heightChangedDetected) {
      component.height = heightShapeElement;
    }
  }

  onElementEvents(component: ElementShapeComponent) {
    component.shape.element
      .on('change:position', (context: any) => { this._positionComponent(component); })
      .on('change:size', (context: any) => { this._sizeComponent(component); })
    ;
  }

  onLinkEvents(component: LinkShapeComponent) {
    component.shape.link
      .on('change:source', (context: any) => { console.log('change:source', context); })
      .on('change:target', (context: any) => { console.log('change:target', context); })
    ;
  }

  private setAttrProp(shapeObject: dia.Link | dia.Element, prop: string, currentValue: {}) {

    for (const attr in currentValue) {
      if (currentValue.hasOwnProperty(attr)) {
        shapeObject.attr(prop + '/' + attr, currentValue[attr]);
      }
    }

  }

  private _setAttrChanges(changes: SimpleChanges, shape: GenericShape) {
    let shapeObject: dia.Link | dia.Element;

    if (shape instanceof ElementShape) {
      shapeObject = shape.element;
    } else {
      shapeObject = shape.link;
    }

    const attrs = shapeObject.attributes['attrs'];

    for (const prop in changes) {
      if (changes.hasOwnProperty(prop) &&
        prop !== 'x' && prop !== 'y' && prop !== 'width' && prop !== 'height') {
        const currentValue: {} = changes[prop].currentValue;
        const previousValue: {} = attrs[prop];
        if (currentValue !== previousValue) {
          this.setAttrProp(shapeObject, prop, currentValue);
        }
      }
    }

    // console.log(element.attributes);

  }

  setElementChanges(changes: SimpleChanges, component: ElementShapeComponent) {
    const shape = component.shape;
    if (!shape) { return; } // first time changes is before shape is created
    const bbox = shape.element.getBBox();
    const element = component.shape.element;

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

    // process position changes
    if (positionChangeDetected) {
      element.position(component.x, component.y);
      console.log('onShapeChanges.position');
    }

    // process size changes
    if (sizeChangeDetected) {
      element.resize(component.width, component.height);
      console.log('onShapeChanges.resize');
    }

    // process attrs changes
    this._setAttrChanges(changes, component.shape);

  }

  setLinkChanges(changes: SimpleChanges, component: LinkShapeComponent) {
    const shape = component.shape;
    if (!shape) { return; } // first time changes is before shape is created
    const link = component.shape.link;

    // process attrs changes
    this._setAttrChanges(changes, component.shape);

  }

}
