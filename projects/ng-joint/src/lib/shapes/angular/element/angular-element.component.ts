import { Component, Input, Output, EventEmitter,
  ElementRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

import { Subject } from 'rxjs';

import { DiaGraphElement } from '../../../dia/dia-graph-element';
import { GenericElementShapeComponent } from '../../shapes';
import { NgJointAngularGenericElement } from '../shapes-angular';
import { AngularElementService } from './angular-element.service';
import { AngularElement } from './angular-element';

@Component({
  selector: 'dgwnu-angular-element',
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
export interface NgJointAngularElement extends NgJointAngularGenericElement {
  x: number;
  y: number;
  width: number;
  height: number;
}
