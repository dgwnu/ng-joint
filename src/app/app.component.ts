import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-jointjs';
  examplesList = [
    {
      examples: 'shapes-standard',
      pages: [
        {
          title: 'Standard Elements',
          path: 'standard-elements'
        }
      ]
  ];



  constructor(private router: Router) {}

  onExamplesOverviewPage(examples: string) {
    this.router.navigate([examples + '-examples']);
  }

}
