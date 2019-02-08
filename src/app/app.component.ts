import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { MatToolbar, MatCardContent } from '@angular/material';

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
        route: 'shapes-angular-examples/angular-template-only'
      },
      {
        name: 'Angular bi-directional bind',
        route: 'shapes-angular-examples/angular-bi-dir-bind'
      }
    ]
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('menucontent') menucontentRef: ElementRef;

  title = 'ng-jointjs';
  treeControl = new NestedTreeControl<ExampleNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ExampleNode>();
  paperWidth: number;
  paperHeight: number;

  constructor(private el: ElementRef) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleNode) => !!node.children && node.children.length > 0;

  ngAfterViewInit() {
    this.paperWidth = this.el.nativeElement.offsetWidth - this.menucontentRef.nativeElement.offsetWidth;
    console.log(this.menucontentRef.nativeElement.offsetParent);
  }

}
