import { Component } from '@angular/core';

import { GenericUmlLinkShapeComponent } from '../shapes-uml';
import { NgJointUmlLink } from '../shapes-uml';
import { UmlComposition } from './uml-composition';
import { UmlCompositionService } from './uml-composition.service';

@Component({
  selector: 'ng-joint-uml-composition',
  template: `
    <!-- joint.shapes.uml.Composition  -->
    `,
})
export class UmlCompositionComponent extends GenericUmlLinkShapeComponent {

  constructor(private umlCompositionService: UmlCompositionService) { 
    super(umlCompositionService);
  }

  shape: UmlComposition;

}

/**
 * Ng Joint UML Composition Interface (use this with arrays and structural directives *ngFor, ..)
 */
export interface NgJointUmlComposition extends NgJointUmlLink {

}
