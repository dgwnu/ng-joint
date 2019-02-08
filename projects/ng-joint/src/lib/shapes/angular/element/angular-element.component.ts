import { Component, ElementRef, ChangeDetectionStrategy } from '@angular/core';

import { GenericElementShapeComponent } from '../../shapes';
import { AngularElementService } from './angular-element.service';
import { AngularElement } from './angular-element';

/**
 * NgJoint Shapes Angular Component
 *
 * Angular Element Shape
 *
 * Element Shape that is able to contain Angular based Content (structural directives, angular material, etc.)
 *
 * Examples:
 *
 * <example-url>http://www.plan-k.nl/diensten</example-url>
 *
 */
@Component({
  selector: 'ng-joint-angular-element',
  templateUrl: './angular-element.component.html',
  styleUrls: [ './angular-element.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularElementComponent extends GenericElementShapeComponent {

  constructor(
    private angularElementService: AngularElementService,
    /** angular element DOM or Node Element Reference */
    public ngElementRef: ElementRef
  ) {
    super(angularElementService);
  }

  shapeInstance: AngularElement;

}

/**
 * Ng Joint Angular Element Interface (use this with arrays and structural directives *ngFor, ..)
 */
export { NgJointAngularGenericElement as NgJointAngularElement } from '../shapes-angular';
