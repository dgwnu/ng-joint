import { Component, ContentChildren, QueryList } from '@angular/core';

import { DiaGraph } from '../../dia';
import { ShapePlugin, ElementShapeComponent } from '../shapes';
import { ShapesAngularService } from './shapes-angular.service';
import { AngularElementComponent, NgJointAngularElement } from './element/angular-element.component';

/**
 * NgJoint Shapes Angular Component
 *
 * ShapePlugin Element for Angular based Shapes 
 *
 * Plugin's to enable the use of Angular 7.x features inside jointjs shapes
 *
 * @example
 *
 * <ng-joint-dia-paper
 *  [width]="800"
 *  [height]="600"
 *  [gridSize]="2"
 *  [drawGrid]="true">
 *
 *  </ng-joint-dia-graph>
 *
 *   <ng-joint-shapes-angular>
 *
 *   </ng-joint-shapes-angular>
 *
 *  </ng-joint-dia-graph>
 *
 * </ng-joint-dia-paper>
 *
 */
@Component({
  selector: 'ng-joint-shapes-angular',
  template: `
    <ng-content></ng-content>
    `,
})
export class ShapesAngularComponent implements ShapePlugin {
  /** NgJoint Angular Element Shape Component Instance(s) */
  @ContentChildren(AngularElementComponent) angularElements: QueryList<ElementShapeComponent>;

  constructor(private service: ShapesAngularService) { }

  /** @ignore */
  private _graphInstance: DiaGraph;

  /**
   * Set Parent DiaGraphElement (ng-joint-dia-graph) and create Plugin Shapes
   */
  set graphInstance(graphInstance: DiaGraph) {
    this._graphInstance = graphInstance;
    this.service.createShapes([this.angularElements], [], this._graphInstance);
  }

}

export {
  AngularElementComponent, NgJointAngularElement
};
