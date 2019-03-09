import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppGenericService } from './app-generic.service';

interface MenuOptionInterface {
  title: string;
  description?: string;
  path: string;
  childs?: MenuOptionInterface[];
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  initialized = false;

  menuOptions: MenuOptionInterface[] = [
    {
      title: 'Overview Library',
      description: 'ng-joint',
      path: '',
    },
    {
      title: 'shapes.Standard',
      description: 'jointjs',
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

  onOverview(menuOption: MenuOptionInterface) {
    this.router.navigate([menuOption.path]);
  }

}
