import { Injectable, SimpleChanges } from '@angular/core';

import { ElementShapeComponent, LinkShapeComponent, DiaShape, ShapePluginService } from '../shapes';
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

  constructor(private service: ShapesService) { }

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

}
