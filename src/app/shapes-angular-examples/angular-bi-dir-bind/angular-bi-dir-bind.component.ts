import { Component } from '@angular/core';

import { NgJointAngularElement } from '@dgwnu/ng-joint';

// add fields to use inside the Angular Element Box-instances
interface CustomNgEl extends NgJointAngularElement {
  testFieldA: string;
}

@Component({
  selector: 'app-angular-bi-dir-bind',
  templateUrl: './angular-bi-dir-bind.component.html',
  styleUrls: ['./angular-bi-dir-bind.component.scss']
})
export class AngularBiDirBindComponent {

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
  }

  // example how to use events inside Angular Elements
  onClickMatButtonYPlus10(customNgEl: CustomNgEl) {
    customNgEl.y = customNgEl.y + 10;
  }

  // you can handle paper:elementpointerclick events
  // (other events will be added in later versions of this Library)
  onElementPointerClick(id: string) {
    console.log('onElementPointerClick(id: ' + id + ')');
  }

}
