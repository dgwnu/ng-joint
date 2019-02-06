# Angular Element Component

You can use JointNg Angular Elements with One-way or Bi-directional binding.

## One-way binding example

Angular Elements with one-way binding can simply defined as elements inside the HTML-templae of the Component.  

Example _HTML-template_ with one-way binding:

```html
<ng-joint-dia-paper [width]="1200" [height]="600" [gridSize]="10" [drawGrid]="true">
    <ng-joint-dia-graph>
        <ng-joint-shapes>
            <ng-joint-shapes-angular>

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

            </ng-joint-shapes-angular>
        </ng-joint-shapes>
    </ng-joint-dia-graph>
</ng-joint-dia-paper
```

## bi-directional binding example

To use Angular Elements with bi-directional binding you have to create a property Array-instance in the using Component. This should be based on the _NgJointAngularElement_ interface.

Example _Component_:

```ts
import { Component } from '@angular/core';

import { NgJointAngularElement } from '@dgwnu/ng-joint';

// add fields to use inside the Angular Element Box-instances
interface CustomNgEl extends NgJointAngularElement {
  testFieldA: string;
}

@Component({
  selector: 'app-struct-dir-demo',
  templateUrl: './struct-dir-demo.component.html',
  styleUrls: ['./struct-dir-demo.component.scss']
})
export class ExampleComponent {

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

  onClickMatButtonXPlus10(customNgEl: CustomNgEl) {
    customNgEl.x = customNgEl.x + 10;
    this.links[1].line = { strokeWidth: 4 };
  }

  onClickMatButtonYPlus10(customNgEl: CustomNgEl) {
    customNgEl.y = customNgEl.y + 10;
    this.links[1].line = { strokeWidth: 6 };
  }

  onElementPointerClick(id: string) {
    console.log('onElementPointerClick(id: ' + id + ')');
  }

}
```

Example _HTML-template_ with bi-directional binding:

```html
<ng-joint-dia-paper
    [width]="1200"
    [height]="600"
    [gridSize]="10"
    [drawGrid]="true">

    <ng-joint-dia-graph>

        <ng-joint-shapes>
            <ng-joint-shapes-angular>

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
                            <button mat-mini-fab color="accent" (click)="onClickMatButtonXPlus10(customNgEl)">
                                x + 10
                            </button>
                            <button mat-mini-fab color="accent" (click)="onClickMatButtonYPlus10(customNgEl)">
                                y + 10
                            </button>
                        </mat-card-footer>
                    </mat-card>
                </ng-joint-angular-element>

            </ng-joint-shapes-angular>

        </ng-joint-shapes>

    </ng-joint-dia-graph>

</ng-joint-dia-paper>
```
