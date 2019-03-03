import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ExamplesInterface {
  main: string;
  subs: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-jointjs';
  examplesList: ExamplesInterface[] = [
    {
      main: 'standard',
      subs: [
        'elements',
        'links'
      ]
  ];



  constructor(private router: Router) {}

  onExamplesOverviewPage(examples: string) {
    this.router.navigate([examples + '-examples']);
  }

}
