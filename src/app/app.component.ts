import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
  AfterViewInit
} from '@angular/core';
import { Router } from '@angular/router';
import { MatAccordion, MatAccordionDisplayMode } from '@angular/material';

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
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('accordion') accordion: MatAccordion;

  accordionMulti = true;
  accordionDisplayMode: MatAccordionDisplayMode = 'flat';
  accordionHideToggle = false;

  expansionPanelExpanded = true;

  expensionPanelHeaderCollapsedHeight = '40px';
  expensionPanelHeaderExpandedHeight = '40px';

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
    },
    {
      title: 'shapes.uml',
      description: 'jointjs',
      path: 'shapes-uml-examples',
      childs: [
        {
          title: 'UML Class Diagram',
          path: 'uml-class-diagram'
        }
      ]
    },
    {
      title: 'shapes.Angular',
      description: 'ng-joint',
      path: 'shapes-angular-examples',
      childs: [
        {
          title: 'Template Only',
          path: 'angular-template-only'
        },
        {
          title: 'Bi-Directional Bind',
          path: 'angular-bi-dir-bind'
        }
      ]
    }
  ];



  constructor(
    public service: AppGenericService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('AppComponent.ngOnInit');
  }

  ngAfterViewInit() {
    console.log('AppComponent.ngAfterViewInit');
    // this.accordion.openAll();
  }

  afterCollapse(menuOption: MenuOptionInterface) {
    // PM
  }

  afterExpand(menuOption: MenuOptionInterface) {
    // PM
  }

}
