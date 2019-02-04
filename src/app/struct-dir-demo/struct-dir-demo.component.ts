import { Component, OnInit } from '@angular/core';

import { NgJointStandardRectangle, NgJointStandardLink, NgJointAngularElement } from '@dgwnu/ng-joint';

// add fields to use inside the Angular Element Box-instances
interface CustomNgEl extends NgJointAngularElement {
  testFieldA: string;
}

@Component({
  selector: 'app-struct-dir-demo',
  templateUrl: './struct-dir-demo.component.html',
  styleUrls: ['./struct-dir-demo.component.scss']
})
export class StructDirDemoComponent implements OnInit {

  constructor() { }

  rects: NgJointStandardRectangle[] = [
    {
      id: 'rect',
      x: 10,
      y: 30,
      width: 100,
      height: 40,
      body: { fill: 'blue' },
      label: { text: 'Hello', fill: 'white' }
    },
    {
      id: 'rect1',
      x: 310,
      y: 30,
      width: 100,
      height: 40,
      body: { fill: 'blue' },
      label: { text: 'World!', fill: 'white' }
    },
    {
      id: 'rect2',
      x: 610,
      y: 30,
      width: 100,
      height: 40,
      body: { fill: 'blue' },
      label: { text: 'And Universe!', fill: 'green' }
    }
  ];

  links: NgJointStandardLink[] = [
    { id: 'link1', sourceId: 'rect', targetId: 'rect1', line: { stroke: '#fe854f' } },
    { id: 'link2', sourceId: 'rect1', targetId: 'rect2', line: { strokeWidth: 8 } }
  ];

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

  ngOnInit() {

  }

  onClickMatButtonXPlus10(event: MouseEvent, customNgEl: CustomNgEl) {
    customNgEl.x = customNgEl.x + 10;
    this.links[1].line = { strokeWidth: 4 };
  }

  onClickMatButtonYPlus10(event: MouseEvent, customNgEl: CustomNgEl) {
    customNgEl.y = customNgEl.y + 10;
    this.links[1].line = { strokeWidth: 6 };
  }

  onElementPointerClick(event: any) {
    console.log('onElementPointerClick');
  }

}
