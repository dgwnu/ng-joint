import { Component } from '@angular/core';

@Component({
  selector: 'app-shapes-angular-examples',
  templateUrl: './shapes-angular-examples.component.html',
  styleUrls: ['./shapes-angular-examples.component.scss']
})
export class ShapesAngularExamplesComponent {
  background = '';
  navLinks = [
    { path: 'angular-bi-dir-bind', label: 'Template Only'},
    { path: ' angular-template-only', label: 'Bi-directional Binding'},
  ];

}
