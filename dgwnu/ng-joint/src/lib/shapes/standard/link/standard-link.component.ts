import { Component } from '@angular/core';

import { GenericStandardLinkShapeComponent } from '../shapes-standard';
import { StandardLink } from './standard-link';
import { StandardLinkService } from './standard-link.service';

/**
 * NgJoint Standard Link Component
 *
 * JointJs Standard Link
 *
 * @comment create's StandardLink Instance
 *
```
<ng-joint-paper
  width=800
  height=600
  gridSize=2
  drawGrid=true>

  </ng-joint-dia-graph>

    <ng-joint-shapes>

      <ng-joint-shapes-standard>

        <dgwnu-standard-rectangle (elementPointerClick)="onElementPointerClick($event)"
          [id]="'rect'"
          [x]="10" [y]="30" [width]="100" [height]="40">
        </dgwnu-standard-rectangle>

        <dgwnu-standard-rectangle 
          [id]="'rect2'"
          [x]="310" [y]="30" [width]="100" [height]="40"> 
        </dgwnu-standard-rectangle>

        <dgwnu-standard-link
          [id]="'link'"
          [sourceId]="'rect'"
          [targetId]="'rect2'">
        </dgwnu-standard-link>

      </ng-joint-shapes-standard>

    </ng-joint-shapes>

  </ng-joint-dia-graph>

</ng-joint-paper>
```
*/
@Component({
  selector: 'ng-joint-standard-link',
  template: `
    <!-- joint.shapes.standard.Link  -->
    `,
})
export class StandardLinkComponent extends GenericStandardLinkShapeComponent {

  constructor(private standardLinkService: StandardLinkService) {
    super(standardLinkService);
  }

  shape: StandardLink;

}

/**
 * Ng Joint Standard Link Interface (use this with arrays and structural directives *ngFor, ..)
 */
export { NgJointGenericStandardLink as NgJointStandardLink } from '../shapes-standard';
