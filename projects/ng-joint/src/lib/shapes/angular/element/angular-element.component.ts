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
 * Example of usage:
 *
 * <example-url>http://www.plan-k.nl</example-url>
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
    public ngElementRef: ElementRef
  ) {
    super(angularElementService);
  }

  shape: AngularElement;

}

/**
 * Ng Joint Angular Element Interface (use this with arrays and structural directives *ngFor, ..)
 */
export { NgJointAngularGenericElement as NgJointAngularElement } from '../shapes-angular';
