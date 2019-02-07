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
    { path: 'shapes-angular-examples', label: 'Hello World Demo'},
  ];
}
