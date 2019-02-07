import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-jointjs';
  background = '';
  navLinks = [
    { path: 'angular-elements-demo', label: 'Angular Elements Label'},
    { path: 'hello-world-demo', label: 'Hello World Demo'},
    { path: 'struct-dir-demo', label: 'Structural Directives Demo'},
    { path: 'uml-class-diagram-demo', label: 'UML Class Diagram Demo'}
  ];
}
