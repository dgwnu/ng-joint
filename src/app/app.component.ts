import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppGenericService } from './app-generic.service';

interface ExamplesInterface {
  title: string;
  description?: string;
  path: string;
  childs?: ExamplesInterface[];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  initialized = false;

  examplesList: ExamplesInterface[] = [
    {
      title: 'shapes.Standard',
      description: '(jointjs)',
      path: 'shapes-standard-examples',
      childs: [
        {
          title: 'Elements',
          path: 'standard-elements'
        },
        {
          title: 'Links',
          path: 'standard-links'
        }
      ]
    }
  ];



  constructor(
    public service: AppGenericService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initialized = true;
  }

  onOverview(main: string) {
    this.router.navigate([main]);
  }

  buildMainTitle(main: string): string {
    const mainWords = main.split('-');
    return mainWords[0] + ' ' + mainWords[1];
  }

  buildSubTitle(sub: string): string {
    return sub.split('-')[1];
  }

}
