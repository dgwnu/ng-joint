import { Injectable, QueryList, SimpleChanges } from '@angular/core';

import { DiaGraph } from '../dia/graph';
import {
  ShapePlugin,
  GenericShape,
  DiaShape,
  ShapeComponent,
  ElementShapeComponent,
  LinkShapeComponent,
  GenericElementShapeComponent,
  GenericLinkShapeComponent
} from './shapes';

/**
 * NgJoint Shapes Service Class
 *
 * @comment Manages LifeCycle, Events and Bi-Directional Data-Binding of Plugin Shapes
 */
@Injectable({
  providedIn: 'root'
})
export class ShapesService {

  constructor() {}

  /**
   * Activate Ng Joint JS Shape Plugins (Standard, Angular, ...)
   */
  activateShapePlugins(shapePlugins: ShapePlugin[], graphInstance: DiaGraph) {
    for (const shapePlugin of shapePlugins) {
      if (shapePlugin) { shapePlugin.graphInstance = graphInstance; }
    }
  }

  /**
   * Create Shapes from ContentChildren QueryLists on ShapePlugin Component
   * @param component any shape Plugin Component
   */
  initShapePluginComponent(component: any) {
    const elements: QueryList<GenericElementShapeComponent>[] = [];
    const links: QueryList<GenericLinkShapeComponent>[] = [];

    for (const key in component) {
      if (component[key] instanceof QueryList) {
        const listObject = component[key]['first'];
        if (listObject) {
          if (listObject instanceof GenericElementShapeComponent) {
            elements.push(component[key]);
          }
          if (listObject instanceof GenericLinkShapeComponent) {
            links.push(component[key]);
          }
        }
      }
    }

    console.log('elements', elements);
    console.log('links', links);
    this.createShapes(elements, links, component.graphInstance);
  }

  /**
   * Create Ng Joint Js Shapes (Elements and Links) for Declared Components
   */
  createShapes(elements: QueryList<ElementShapeComponent>[], links: QueryList<LinkShapeComponent>[], graphInstance: DiaGraph) {
    // Firstly, create elements
    for (const element of elements) {
      element.forEach(elementShape => {
        elementShape.createShape(graphInstance);
      });
    }
    // Secondly, create links and connect them between the elements
    for (const link of links) {
      link.forEach(linkShape => {
        // create link shape
        linkShape.createShape(graphInstance);

        // connect link to elements
        for (const element of elements) {

          // connect source element
          const source = element.find(elementShape => elementShape.id === linkShape.sourceId);
          if (source) {
            linkShape.sourceShape = source.shapeInstance;
          }

          // connect target element
          const target = element.find(elementShape => elementShape.id === linkShape.targetId);
          if (target) {
            linkShape.targetShape = target.shapeInstance;
          }

        }
      });
    }

  }

  /**
   * @ignore
   */
  private _positionComponent(component: ElementShapeComponent) {
    const shape = component.shapeInstance;
    const xShapeElement = shape.jointjsObject.getBBox().x;
    const yShapeElement = shape.jointjsObject.getBBox().y;
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
    const shape = component.shapeInstance;
    const widthShapeElement = shape.jointjsObject.getBBox().width;
    const heightShapeElement = shape.jointjsObject.getBBox().height;
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
    // jointjs internal element event handling
    // bi-directional data changes
    component.shapeInstance.jointjsObject
      .on('change:position', (context: any) => { this._positionComponent(component); })
      .on('change:size', (context: any) => { this._sizeComponent(component); })
    ;

    // jointjs internal paper event handling
    // emit events on element level to seperate event-sources (element instances)
    component.graphInstance.jointEvent.subscribe(
      event => {
        if (event.eventSource === 'element') {
          if (event.eventType === 'pointerclick') {
            if ((event.cid === component.shapeInstance.jointjsObject.cid)) {
              component.elementPointerClick.emit(event.cid);
            }
          }
        }
      }
    );
  }

  /**
   * NgJoint dia.Link.events handling
   *
   * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Link.events
   */
  onLinkEvents(component: LinkShapeComponent) {
    component.shapeInstance.jointjsObject
      .on('change:source', (context: any) => { /* console.log('change:source', context); */ })
      .on('change:target', (context: any) => { /* console.log('change:target', context); */ })
    ;
  }

  configShapeAttrs<T extends ShapeComponent>(component: T) {
    // shape attrs config
    const shape = component.shapeInstance.jointjsObject;

    for (const prop in shape.attributes.attrs) {
      if (component[prop]) {
        this.setAttrProp(shape, prop, component[prop]);
      }
    }
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
    const diaShape: DiaShape = shape.jointjsObject;
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
    const shape = component.shapeInstance;
    if (!shape) { return; } // first time changes is before shape is created
    const bbox = shape.jointjsObject.getBBox();
    const element = shape.jointjsObject;

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
    this._setAttrChanges(changes, shape);

  }

  /**
   * Process Angular Link Component changes --> in JointJs Link Shape object
   *
   * @comment To provide bi-directional functionality for attrs
   */
  setLinkChanges(changes: SimpleChanges, component: LinkShapeComponent) {
    const shape = component.shapeInstance;
    if (!shape) { return; } // first time changes is before shape is created
    const link = shape.jointjsObject;

    // process attrs changes
    this._setAttrChanges(changes, shape);

  }

}
