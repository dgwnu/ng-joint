import { Component } from '@angular/core';

import { GenericStandardLinkShapeComponent } from '../shapes-standard';
import { StandardLink } from './standard-link';
import { StandardLinkService } from './standard-link.service';

/**
 * joint.shapes.standard.Link Component
 * based on: https://github.com/clientIO/joint/blob/master/plugins/shapes/joint.shapes.standard.js
 */
@Component({
  selector: 'dgwnu-standard-link',
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
