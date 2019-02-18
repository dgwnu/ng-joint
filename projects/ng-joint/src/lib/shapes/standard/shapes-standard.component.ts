import { Component, ContentChildren, QueryList } from '@angular/core';

import { DiaGraph } from '../../dia/graph';
import { ShapePlugin, ElementShapeComponent, LinkShapeComponent } from '../shapes';
import { GenericStandardElementShapeComponent, GenericStandardLinkShapeComponent } from './shapes-standard';
import { ShapesStandardService } from './shapes-standard.service';
import { StandardRectangleComponent, NgJointStandardRectangle } from './rectangle';
import { StandardLinkComponent, NgJointStandardLink } from './link';

/**
 * NgJoint Shapes Standard Component
 *
 * ShapePlugin Element for JointJs Standard Shapes 
 *
 * Container for jointjs standard shapes (jointjs.shapes.Standard)
 *
 ```html
<ng-joint-paper
  width=800
  height=600
  gridSize=2
  drawGrid=true>

  </ng-joint-dia-graph>

    <ng-joint-shapes>

    <ng-joint-shapes-standard>

      </ng-joint-shapes-standard>

    </ng-joint-shapes>

  </ng-joint-dia-graph>

</ng-joint-paper>
```
*/
@Component({
  selector: 'ng-joint-shapes-standard',
  template: `
    <ng-content></ng-content>
    `,
})
export class ShapesStandardComponent implements ShapePlugin {
  /** NgJoint Angular Standard Rectangle Component Instance(s) */
  @ContentChildren(StandardRectangleComponent) standardRectangles: QueryList<GenericStandardElementShapeComponent>;

  /** NgJoint Angular Standard Link Component Instance(s) */
  @ContentChildren(StandardLinkComponent) standardLinks: QueryList<GenericStandardLinkShapeComponent>;

  constructor(private service: ShapesStandardService) { }

  /** @ignore */
  private _graphInstance: DiaGraph;

  /**
   * Set Parent DiaGraphElement (ng-joint-dia-graph) and create Plugin Shapes
   */
  set graphInstance(graphInstance: DiaGraph) {
    this._graphInstance = graphInstance;
    this.service.initShapes(this);
    this.service.createShapes(
      [this.standardRectangles],
      [this.standardLinks],
      this._graphInstance
      );
  }

}

export {
  StandardRectangleComponent, NgJointStandardRectangle,
  StandardLinkComponent, NgJointStandardLink
};
