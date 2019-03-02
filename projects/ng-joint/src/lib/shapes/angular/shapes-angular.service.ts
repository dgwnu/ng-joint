import { 
  Injectable,
  SimpleChanges,
  Renderer2,
  RendererFactory2
} from '@angular/core';

import { ShapePluginService } from '../shapes';
import { GenericAngularElementShapeComponent } from './shapes-angular';
import { ShapesService } from '../shapes.service';
import { ShapesAngularComponent } from '../../schematic-generated/angular';

// definition of angular content behaviour
const _NODE_NAMES_ = ['BUTTON', 'INPUT', 'SELECT'];
const _CONTENT_STYLE_ = 'pointer-events';
const _STYLE_VALUE_ = 'auto';

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

  initShapePluginComponent(component: ShapesAngularComponent) {
    this.service.initShapePluginComponent(component);
  }

  // set behaviour of html (and angular specific) content within angular element
  private _setNgContentStyles(contentNode: Node | ChildNode) {
    contentNode.childNodes.forEach(childNode => {

      if (_NODE_NAMES_.find(nodeName => nodeName === childNode.nodeName)) {
        this.renderer.setStyle(childNode, _CONTENT_STYLE_, _STYLE_VALUE_);
      }

      // process child nodes (until no more)
      if (childNode.hasChildNodes) { this._setNgContentStyles(childNode); }
    });
  }

  // set NgStyle in DIV-container (first child node)
  private _setNgElPxStyleProp(elementNode: Node, prop: string, px: number) {
    console.log('_setNgElPxStyleProp', elementNode.firstChild);
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
  private _initComponent(component: GenericAngularElementShapeComponent) {
    this._positionNgElement(component.ngNode, component.x, component.y);
    this._sizeNgElement(component.ngNode, component.width, component.height);
  }

  private _positionComponent(component: GenericAngularElementShapeComponent) {
    const shape = component.shapeInstance;
    const xShapeElement = shape.jointjsObject.getBBox().x;
    const yShapeElement = shape.jointjsObject.getBBox().y;
    const xChangeDetected = (component.x !== xShapeElement);
    const yChangedDetected = (component.y !== yShapeElement);

    if (xChangeDetected || yChangedDetected) {
      this._positionNgElement(component.ngNode, xShapeElement, yShapeElement);
    }

    if (xChangeDetected) {
      component.x = xShapeElement;
    }
    if (yChangedDetected) {
      component.y = yShapeElement;
    }
  }

  private _resizeComponent(component: GenericAngularElementShapeComponent) {
    const shape = component.shapeInstance;
    const widthShapeElement = shape.jointjsObject.getBBox().width;
    const heightShapeElement = shape.jointjsObject.getBBox().height;
    const widthChangeDetected = (component.width !== widthShapeElement);
    const heightChangedDetected = (component.height !== heightShapeElement);

    if (widthChangeDetected || heightChangedDetected) {
      this._sizeNgElement(component.ngNode, widthShapeElement, heightShapeElement);
    }

    if (widthChangeDetected) {
      component.width = widthShapeElement;
    }
    if (heightChangedDetected) {
      component.height = heightShapeElement;
    }
  }

  // Bi-Directional processing of changes (moving and resizing jointjs and angular BOX in sync)
  setElementChanges(changes: SimpleChanges, component: GenericAngularElementShapeComponent) {
    const shape = component.shapeInstance;
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
        this._positionNgElement(component.ngNode, component.x, component.y);
    }
    if (sizeChangeDetected) {
        shape.jointjsObject.resize(component.width, component.height);
        this._sizeNgElement(component.ngNode, component.width, component.height);
    }
  }

  // Change Handler to move/resize angular element DIV-container
  onElementEvents(component: GenericAngularElementShapeComponent) {

    this._initComponent(component);

    component.shapeInstance.jointjsObject
      .on('change:position', (context: any) => {
        this._positionComponent(component);
    })
      .on('change:size', (context: any) => {
        this._resizeComponent(component);
    });

  }

  elementShapeOptions(component: GenericAngularElementShapeComponent) {
    return {
      position: { x: component.x, y: component.y },
      size: { width: component.width, height: component.height }
    };
  }

  configElementShape(component: GenericAngularElementShapeComponent) {
    component.graphInstance.addElement(component.shapeInstance);
    this._setNgContentStyles(component.ngNode);
  }

}
