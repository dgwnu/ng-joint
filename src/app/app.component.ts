import { Component } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

/**
 * Example data with nested structure.
 * Each node has a name, route and an optional list of children.
 */
interface ExampleNode {
  name: string;
  route: string;
  children?: ExampleNode[];
}

const TREE_DATA: ExampleNode[] = [
  {
    name: 'Shapes Angular Examples',
    route: 'shapes-angular-examples',
    children: [
      {
        name: 'Angular template only',
        route: 'angular-template-only'
      },
      {
        name: 'Angular bi-directional bind',
        route: 'angular-bi-dir-bind'
      }
    ]
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-jointjs';
  treeControl = new NestedTreeControl<ExampleNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ExampleNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleNode) => !!node.children && node.children.length > 0;
}
