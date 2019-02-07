import { Component } from '@angular/core';

import { routePath } from './shapes-angular-examples-routing.module';

@Component({
  selector: 'app-shapes-angular-examples',
  templateUrl: './shapes-angular-examples.component.html',
  styleUrls: ['./shapes-angular-examples.component.scss']
})
export class ShapesAngularExamplesComponent {
  background = '';
  navLinks = [
    { path: routePath.templateOnly, label: 'Template Only'},
    { path: routePath.biDirBind, label: 'Bi-directional Binding'},
  ];

}
