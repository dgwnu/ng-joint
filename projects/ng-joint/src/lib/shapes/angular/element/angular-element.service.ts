import { Injectable, ElementRef, Renderer2, RendererFactory2, SimpleChanges } from '@angular/core';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { ShapesAngularService } from '../shapes-angular.service';
import { AngularElement } from './angular-element';
import { AngularElementComponent } from './angular-element.component';

@Injectable({
  providedIn: 'root'
})
export class AngularElementService {
  /** 
   * Using Rendere2 within a service (only provided in Components)
   * @see https://stackoverflow.com/questions/43070308/using-renderer-in-angular-4 
   */
  private renderer: Renderer2;

  constructor(
    private shapesService: ShapesAngularService,
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
    const xShapeElement = shape.element.getBBox().x;
    const yShapeElement = shape.element.getBBox().y;
    const xChangeDetected = (component.x !== xShapeElement);
    const yChangedDetected = (component.y !== yShapeElement);
    console.log('_positionComponen.component.x', component.x);
    console.log('_positionComponen.xShapeElement', xShapeElement);

    if (xChangeDetected || yChangedDetected) {
      this._positionNgElement(shape.ngNode, xShapeElement, yShapeElement);
    }

    if (xChangeDetected) {
      component.x = xShapeElement;
      console.log('_positionComponen.x'); 
    }
    if (yChangedDetected) {
      component.y = yShapeElement;
      console.log('_positionComponen.y');
    }
  }

  private _resizeComponent(component: AngularElementComponent) {
    const shape = component.shape;
    const widthShapeElement = shape.element.getBBox().width;
    const heightShapeElement = shape.element.getBBox().height;
    const widthChangeDetected = (component.width !== widthShapeElement);
    const heightChangedDetected = (component.height !== heightShapeElement);

    if (widthChangeDetected || heightChangedDetected) {
      this._sizeNgElement(shape.ngNode, widthShapeElement, heightShapeElement);
    }

    if (widthChangeDetected) {
      component.width = widthShapeElement;
      console.log('_resizeComponent.width');
    }
    if (heightChangedDetected) {
      component.height = heightShapeElement;
      console.log('_resizeComponent.height');
    }
  }

  // Change Handler to move/resize angular element DIV-container
  onEvents(component: AngularElementComponent) {

    this._initComponent(component);

    component.shape.element
      .on('change:position', (context: any) => {
        this._positionComponent(component);
    } )
      .on('change:size', (context: any) => {
        this._resizeComponent(component);
    } );

  }

  setChanges(changes: SimpleChanges, component: AngularElementComponent) {
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
        this._positionNgElement(shape.ngNode, component.x, component.y);
        console.log('onShapeChanges.position');
    }
    if (sizeChangeDetected) {
        component.shape.element.resize(component.width, component.height);
        this._sizeNgElement(shape.ngNode, component.width, component.height);
        console.log('onShapeChanges.resize');
    }

  }

  /**
   * create new Angular Element (that renders Angular Element in joinjs BBOX)
   */
  createElementShape(
    graphElement: DiaGraphElement,
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

    graphElement.addElementShape(elementShape);

    this._setNgContentStyles(elementShape.ngNode);

    return elementShape;
  }

}
