import { Component, ContentChildren, QueryList } from '@angular/core';

import { GenericShapePluginComponent } from '../shapes';
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
export class ShapesStandardComponent extends GenericShapePluginComponent {
  @ContentChildren(StandardRectangleComponent) standardRectangles: QueryList<GenericStandardElementShapeComponent>;
  @ContentChildren(StandardLinkComponent) standardLinks: QueryList<GenericStandardLinkShapeComponent>;

  constructor(private shapesStandardService: ShapesStandardService) {
    super(shapesStandardService);
  }

}

export {
  StandardRectangleComponent, NgJointStandardRectangle,
  StandardLinkComponent, NgJointStandardLink
};
