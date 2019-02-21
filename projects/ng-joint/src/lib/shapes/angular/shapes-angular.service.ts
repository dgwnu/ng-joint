import { Injectable, SimpleChanges, Renderer2, RendererFactory2 } from '@angular/core';

import { ElementShapeComponent, LinkShapeComponent, DiaShape, ShapePluginService } from '../shapes';
import { AngularElementShape } from './shapes-angular';
import { ShapesService } from '../shapes.service';
import { ShapesAngularComponent } from './shapes-angular.component';

/**
 * NgJoint Shapes Angular Service Class
 *
 * @comment Manages LifeCycle, Events and Bi-Directional Data-Binding Angular Shapes
 */
@Injectable({
  providedIn: 'root'
})
export class ShapesAngularService implements ShapePluginService {
  /**
   * Using Rendere2 within a service (only provided in Components)
   * @see https://stackoverflow.com/questions/43070308/using-renderer-in-angular-4 
   */
  private renderer: Renderer2;

  constructor(
    private service: ShapesService,
    private rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  // set behaviour of html (and angular specific) content within angular element
  private _setNgContentStyles(contentNode: Node | ChildNode) {
    contentNode.childNodes.forEach(childNode => {
      switch (childNode.nodeName) {
        case 'BUTTON': {
          this.renderer.setStyle(childNode, 'pointer-events', 'auto');
          break;
        }
        case 'INPUT': {
          this.renderer.setStyle(childNode, 'pointer-events', 'auto');
          break;
        }
        case 'SELECT': {
          this.renderer.setStyle(childNode, 'pointer-events', 'auto');
          break;
        }
      }
      // process child nodes (until no more)
      if (childNode.hasChildNodes) { this._setNgContentStyles(childNode); }
    });
  }

  // set NgStyle in DIV-container (first child node)
  private _setNgElPxStyleProp(elementNode: Node, prop: string, px: number) {
    this.renderer.setStyle(elementNode.firstChild, prop, px.toString() + 'px');
  }

  // render new angular element BBOX position
  private _positionNgElement(elementNode: Node, x: number, y: number) {
    this._setNgElPxStyleProp(elementNode, 'left', x);
    this._setNgElPxStyleProp(elementNode, 'top', y);
  }

  // render new angular element BBOX position
  private _sizeNgElement(elementNode: Node, width: number, height: number) {
    this._setNgElPxStyleProp(elementNode, 'width', width);
    this._setNgElPxStyleProp(elementNode, 'height', height);
  }

  // initialize initial component position and size
  private _initComponent(component: AngularElementComponent) {
    console.log('_initComponent', component);
    const elementNode = component.shapeInstance.ngNode;
    this._positionNgElement(elementNode, component.x, component.y);
    this._sizeNgElement(elementNode, component.width, component.height);
  }

  private _positionComponent(component: AngularElementComponent) {
    const shape = component.shapeInstance;
    const xShapeElement = shape.jointjsObject.getBBox().x;
    const yShapeElement = shape.jointjsObject.getBBox().y;
    const xChangeDetected = (component.x !== xShapeElement);
    const yChangedDetected = (component.y !== yShapeElement);

    if (xChangeDetected || yChangedDetected) {
      this._positionNgElement(shape.ngNode, xShapeElement, yShapeElement);
    }

    if (xChangeDetected) {
      component.x = xShapeElement;
    }
    if (yChangedDetected) {
      component.y = yShapeElement;
    }
  }

  private _resizeComponent(component: AngularElementComponent) {
    const shape = component.shapeInstance;
    const widthShapeElement = shape.jointjsObject.getBBox().width;
    const heightShapeElement = shape.jointjsObject.getBBox().height;
    const widthChangeDetected = (component.width !== widthShapeElement);
    const heightChangedDetected = (component.height !== heightShapeElement);

    if (widthChangeDetected || heightChangedDetected) {
      this._sizeNgElement(shape.ngNode, widthShapeElement, heightShapeElement);
    }

    if (widthChangeDetected) {
      component.width = widthShapeElement;
    }
    if (heightChangedDetected) {
      component.height = heightShapeElement;
    }
  }

  // Change Handler to move/resize angular element DIV-container
  onEvents(component: AngularElementComponent) {

    this._initComponent(component);

    component.shapeInstance.jointjsObject
      .on('change:position', (context: any) => {
        this._positionComponent(component);
    })
      .on('change:size', (context: any) => {
        this._resizeComponent(component);
    });

  }

  initShapePluginComponent(component: ShapesAngularComponent) {
    this.service.initShapePluginComponent(component);
  }

  setElementChanges(changes: SimpleChanges, component: ElementShapeComponent) {
    this.service.setElementChanges(changes, component);
  }

  setLinkChanges(changes: SimpleChanges, component: LinkShapeComponent) {
    this.service.setLinkChanges(changes, component);
  }

  setAttrProp(diaShape: DiaShape, prop: string, currentValue: {}) {
    this.service.setAttrProp(diaShape, prop, currentValue);
  }

  elementShapeOptions(properties: {x: number, y: number, width: number, height: number}) {
    return {
      position: { x: properties.x, y: properties.y },
      size: { width: properties.width, height: properties.height }
    };
  }

  configElementShape(elementShape: AngularElementShape, properties: {}) {
    if (elementShape && properties) {
      // PM (additional config...)
    }
  }

}
