import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { strings } from '@angular-devkit/core';

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
    }
  ];



  constructor(private router: Router) {}

  onExamplesMain(main: string) {
    const mainLink = [this.buildMainLink(main)];
    this.router.navigate(mainLink);
  }

  buildMainLink(main: string): string {
    return main + '-examples';
  }

  buildSubLink(main: string, sub: string): string {
    console.log(main, sub);
    return this.buildMainLink(main) + '/' + main + '-' + sub; 
  }

}
