import { Injectable, Renderer2, RendererFactory2, SimpleChanges } from '@angular/core';

import { DiaGraph } from '../../../dia/graph';
import { ElementShapeService } from '../../shapes';
import { ShapesAngularService } from '../shapes-angular.service';
import { AngularElement } from './angular-element';
import { AngularElementComponent } from './angular-element.component';

/**
 * NgJoint Angular Element Service Class
 *
 * @comment Manages LifeCycle, Events and Bi-Directional Data-Binding Angular Elements
 */
@Injectable({
  providedIn: 'root'
})
export class AngularElementService implements ElementShapeService {
  /**
   * Using Rendere2 within a service (only provided in Components)
   * @see https://stackoverflow.com/questions/43070308/using-renderer-in-angular-4 
   */
  private renderer: Renderer2;

  constructor(
    private service: ShapesAngularService,
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
    const elementNode = component.shape.ngNode;
    this._positionNgElement(elementNode, component.x, component.y);
    this._sizeNgElement(elementNode, component.width, component.height);
  }

  private _positionComponent(component: AngularElementComponent) {
    const shape = component.shape;
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
    const shape = component.shape;
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

    component.shape.jointjsObject
      .on('change:position', (context: any) => {
        this._positionComponent(component);
    })
      .on('change:size', (context: any) => {
        this._resizeComponent(component);
    });

  }

  setChanges(changes: SimpleChanges, component: AngularElementComponent) {
    const shape = component.shape;
    if (!shape) { return; } // first time changes is before shape is created

    const bbox = shape.jointjsObject.getBBox();

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

    // process detected changes
    if (positionChangeDetected) {
        shape.jointjsObject.position(component.x, component.y);
        this._positionNgElement(shape.ngNode, component.x, component.y);
    }
    if (sizeChangeDetected) {
        shape.jointjsObject.resize(component.width, component.height);
        this._sizeNgElement(shape.ngNode, component.width, component.height);
    }

  }

  /**
   * create new Angular Element (that renders Angular Element in joinjs BBOX)
   */
  createElementShape(
    graphInstance: DiaGraph,
    component: AngularElementComponent
  ): AngularElement {

    const elementShape = new AngularElement(
      component.id,
      component.ngElementRef,
      {
        position: { x: component.x, y: component.y },
        size: { width: component.width, height: component.height }
      }
    );

    graphInstance.addElement(elementShape);

    this._setNgContentStyles(elementShape.ngNode);

    return elementShape;
  }

}
