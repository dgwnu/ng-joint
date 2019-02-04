import { Component, ContentChildren, QueryList } from '@angular/core';

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
export class ShapesAngularComponent implements ShapePlugin {
  @ContentChildren(AngularElementComponent) angularElements: QueryList<ElementShapeComponent>;

  constructor(private service: ShapesAngularService) { }

  private _graphElement: DiaGraphElement;

  set graphElement(value: DiaGraphElement) {
    this._graphElement = value;
    this.service.createShapes([this.angularElements], [], this._graphElement);
  }

  onElementPointerClick(cid: string) {

  }

}

export {
  AngularElementComponent, NgJointAngularElement
};
