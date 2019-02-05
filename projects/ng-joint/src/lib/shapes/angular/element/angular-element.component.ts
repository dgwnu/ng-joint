import { Component, ElementRef, ChangeDetectionStrategy } from '@angular/core';

import { GenericElementShapeComponent } from '../../shapes';
import { AngularElementService } from './angular-element.service';
import { AngularElement } from './angular-element';

/**
 * NgJoint Shapes Angular Component
 *
 * Angular Element Shape
 * 
 * @comment Element Shape that is able to contain Angular based Content (structural directives, angular material, etc.)
 *
```
<ng-joint-paper
  width=800
  height=600
  gridSize=2
  drawGrid=true>

  </ng-joint-dia-graph>

    <ng-joint-shapes>

      <ng-joint-shapes-angular>

        <!-- Simple example: 
              - one-way data binding only
        -->
        <ng-joint-angular-element
          [id]="'ng1'"
          [x]="400"
          [y]="100"
          [width]="250"
          [height]="200">

            <h1>Standard Angular HTML</h1>
              <button>Standard Button</button>
              <input type="text" name="fname">

        </ng-joint-angular-element>

        <!-- Advanced example
              - bi-directional data-binding =[(var)]
              - interpolation {{ var }}
              - structural directive *ngFor
              - angular material elements <mat-...></mat-...>

              To make it work you have to create:
              - an extend Custom NgJointAngularElement Interface like this:
                  interface CustomNgEl extends NgJointAngularElement {
                    testFieldA: string;
                  }
              - add public property to the Component like this:
                  customNgEls: CustomNgEl[] = [
                    {
                      id: 'Element 1',
                      x: 100,
                      y: 100,
                      height: 10,
                      width: 200,
                      testFieldA: 'TestField1'
                    },
                    {
                      id: 'Element 2',
                      x: 200,
                      y: 350,
                      height: 10,
                      width: 200,
                      testFieldA: 'TestField2'
                    }
                  ];
        -->
        <ng-joint-angular-element *ngFor="let customNgEl of customNgEls"
          [id]="customNgEl.id"
          [(x)]="customNgEl.x"
          [(y)]="customNgEl.y"
          [(width)]="customNgEl.width"
          [(height)]="customNgEl.height">

            <mat-card>
              <mat-card-header>
                <mat-card-title>
                  ({{ customNgEl.id }}): {{ customNgEl.testFieldA }} 
                </mat-card-title>
                  <mat-card-subtitle>
                    ({{ customNgEl.x }}, {{ customNgEl.y }})
                            </mat-card-subtitle>
                        </mat-card-header>
                        <mat-card-content>
                            <mat-form-field>
                                <input matInput placeholder="Input">
                            </mat-form-field>
                        </mat-card-content>
                        <mat-card-footer>
                            <button mat-mini-fab color="accent" (click)="onClickMatButtonXPlus10($event, customNgEl)">
                                x + 10
                            </button>
                            <button mat-mini-fab color="accent" (click)="onClickMatButtonYPlus10($event, customNgEl)">
                                y + 10
                            </button>
                        </mat-card-footer>
                    </mat-card>
                </ng-joint-angular-element>

      </ng-joint-shapes-angular>

    </ng-joint-shapes>

  </ng-joint-dia-graph>

</ng-joint-paper>
```
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
