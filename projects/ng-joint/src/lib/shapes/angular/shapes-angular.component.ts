import { Component, AfterContentInit, Input, ContentChildren, QueryList } from '@angular/core';

import { DiaGraphElement } from '../../dia/dia-graph-element';
import { ShapePlugin, ElementShapeComponent } from '../shapes';
import { ShapesAngularService } from './shapes-angular.service';
import { AngularElementComponent, NgJointAngularElement } from './element/angular-element.component';

@Component({
  selector: 'dgwnu-shapes-angular',
  template: `
    <ng-content></ng-content>
    `,
})
export class ShapesAngularComponent implements AfterContentInit, ShapePlugin {
  @ContentChildren(AngularElementComponent) angularElements: QueryList<ElementShapeComponent>;

  constructor(private service: ShapesAngularService) { }

  private _graphElement: DiaGraphElement;

  ngAfterContentInit() {
    console.log('+----------------------------------------+');
    console.log('| ShapesAngularComponent.ngAfterContentInit |');
    console.log('+----------------------------------------+');
  }

  set graphElement(value: DiaGraphElement) {
    console.log('+----------------------------------------+');
    console.log('| ShapesAngularComponent.graphElement |');
    console.log('+----------------------------------------+');

    this._graphElement = value;
    console.log('this._graphElement = value;', value);

    this.service.createShapes([this.angularElements], [], this._graphElement);

  }

}

export {
  AngularElementComponent, NgJointAngularElement
};
