import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Example data with nested structure.
 * Each node has a name, route and an optional list of children.
 */
interface ExampleNode {
  name: string;
  route: string[];
  children?: ExampleNode[];
}

const TREE_DATA: ExampleNode[] = [
  {
    name: 'Shapes Angular Examples',
    route: ['shapes-angular-examples'],
    children: [
      {
        name: 'Angular template only',
        route: ['shapes-angular-examples', 'angular-template-only']
      },
      {
        name: 'Angular bi-directional bind',
        route: ['shapes-angular-examples', 'angular-bi-dir-bind']
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
  selectedExampleNode = TREE_DATA[0];

  treeControl = new NestedTreeControl<ExampleNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ExampleNode>();

  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA;
    this.routeTreeNode(this.selectedExampleNode);
  }

  hasChild = (_: number, node: ExampleNode) => !!node.children && node.children.length > 0;

  /** Route Navigivation to Example */
  routeTreeNode(exampleNode: ExampleNode) {
    this.router.navigate(exampleNode.route);
    this.selectedExampleNode = exampleNode;
  }
}
