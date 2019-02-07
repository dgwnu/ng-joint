import { Component } from '@angular/core';

import { NgJointStandardRectangle, NgJointStandardLink } from '@dgwnu/ng-joint';

@Component({
  selector: 'app-struct-dir-demo',
  templateUrl: './bi-dir-bind-standard-example.component.html',
  styleUrls: ['./bi-dir-bind-standard-example.component.scss']
})
export class BiDirBindStandardShapesExampleComponent {

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

  onElementPointerClick(id: string) {
    console.log('onElementPointerClick(id: ' + id + ')');
  }

}
