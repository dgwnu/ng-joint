import { Injectable, QueryList, SimpleChanges } from '@angular/core';

import { DiaGraphElement } from '../dia/dia-graph-element';
import {
  ShapePlugin,
  GenericShape,
  DiaShape,
  ElementShape,
  LinkShape,
  ElementShapeComponent,
  LinkShapeComponent
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

  /**
   * @ignore
   */
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

  /**
   * @ignore
   */
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

  /**
   * NgJoint dia.Element.events handling
   *
   * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Element.events
   */
  onElementEvents(component: ElementShapeComponent) {
    component.shape.element
      .on('change:position', (context: any) => { this._positionComponent(component); })
      .on('change:size', (context: any) => { this._sizeComponent(component); })
    ;
  }

  /**
   * NgJoint dia.Link.events handling
   *
   * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Link.events
   */
  onLinkEvents(component: LinkShapeComponent) {
    component.shape.link
      .on('change:source', (context: any) => { /* console.log('change:source', context); */ })
      .on('change:target', (context: any) => { /* console.log('change:target', context); */ })
    ;
  }

  /**
   * Set Attr Property Values on a jointjs dia shape (element or link)
   */
  setAttrProp(diaShape: DiaShape, prop: string, currentValue: {}) {

    for (const attr in currentValue) {
      if (currentValue.hasOwnProperty(attr)) {
        diaShape.attr(prop + '/' + attr, currentValue[attr]);
      }
    }

  }

  /**
   * @ignore
   */
  private _setAttrChanges(changes: SimpleChanges, shape: GenericShape) {
    let diaShape: DiaShape;

    if (shape instanceof ElementShape) {
      diaShape = shape.element;
    } else {
      diaShape = shape.link;
    }

    const attrs = diaShape.attributes['attrs'];

    for (const prop in changes) {
      if (changes.hasOwnProperty(prop) &&
        prop !== 'x' && prop !== 'y' && prop !== 'width' && prop !== 'height') {
        const currentValue: {} = changes[prop].currentValue;
        const previousValue: {} = attrs[prop];
        if (currentValue !== previousValue) {
          this.setAttrProp(diaShape, prop, currentValue);
        }
      }
    }

    // console.log(element.attributes);

  }

  /**
   * Process Angular Element Component changes --> in JointJs Element Shape object
   * 
   * @comment To provide bi-directional functionality for position, size and attrs
   */
  setElementChanges(changes: SimpleChanges, component: ElementShapeComponent) {
    const shape = component.shape;
    if (!shape) { return; } // first time changes is before shape is created
    const bbox = shape.element.getBBox();
    const element = component.shape.element;

    // detect position change
    let positionChangeDetected = false;
    if (changes.x) {
      positionChangeDetected = (changes.x.currentValue !== bbox.x);
    } else if (changes.y) {
      positionChangeDetected = (changes.y.currentValue !== bbox.y);
    }

    // detect size change
    let sizeChangeDetected = false;
    if (changes.width) {
      sizeChangeDetected = (changes.width.currentValue !== bbox.width);
    } else if (changes.height) {
      sizeChangeDetected = (changes.height.currentValue !== bbox.height);
    }

    // process position changes
    if (positionChangeDetected) {
      element.position(component.x, component.y);
    }

    // process size changes
    if (sizeChangeDetected) {
      element.resize(component.width, component.height);
    }

    // process attrs changes
    this._setAttrChanges(changes, component.shape);

  }

  /**
   * Process Angular Link Component changes --> in JointJs Link Shape object
   * 
   * @comment To provide bi-directional functionality for attrs
   */
  setLinkChanges(changes: SimpleChanges, component: LinkShapeComponent) {
    const shape = component.shape;
    if (!shape) { return; } // first time changes is before shape is created
    const link = component.shape.link;

    // process attrs changes
    this._setAttrChanges(changes, component.shape);

  }

  /**
   * broadcast Element Pointer Click event to activated shape plugins
   */
  onElementPointerClick(cid: string, shapePlugins: ShapePlugin[]) {
    for (const shapePlugin of shapePlugins) {
      if (shapePlugin) {  }
    }
  }

}
