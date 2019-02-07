# Angular Element Component

You can use JointNg Angular Elements with One-way or Bi-directional binding.

## One-way binding example

You can simply define Angular Elements with one-way binding inside Angular Component HTML-templates.  

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

Firstly, Define an interface based on _NgJointAngularElement_ with additional Angular Element instance properties.
Finaly, add a property Array-instance to use the Angular Elements with structural directives and bi-directional binding.

Example _Component_ with bi-directional binding for Angular Elements:

```ts
import { Component } from '@angular/core';

import { NgJointAngularElement } from '@dgwnu/ng-joint';

// add fields to use inside the Angular Element Box-instances
interface CustomNgEl extends NgJointAngularElement {
  testFieldA: string;
}

@Component({
  selector: 'app-bi-dir-bind-ng-element-example',
  templateUrl: './bi-dir-bind-ng-element-example.component.html',
  styleUrls: ['./bi-dir-bind-ng-element-example.component.scss']
})
export class BiDirBindNgElementExampleComponent {

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

  // example how to use events inside Angular Elements
  onClickMatButtonXPlus10(customNgEl: CustomNgEl) {
    customNgEl.x = customNgEl.x + 10;
    this.links[1].line = { strokeWidth: 4 };
  }

  // example how to use events inside Angular Elements
  onClickMatButtonYPlus10(customNgEl: CustomNgEl) {
    customNgEl.y = customNgEl.y + 10;
    this.links[1].line = { strokeWidth: 6 };
  }

  // you can handle paper:elementpointerclick events
  // (other events will be added in later versions of this Library)
  onElementPointerClick(id: string) {
    console.log('onElementPointerClick(id: ' + id + ')');
  }

}
```

Example _HTML-template_ to be used as _templateUrl: './bi-dir-bind-ng-element-example.component.html'_ file in the _BiDirBindNgElementExampleComponent_

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
