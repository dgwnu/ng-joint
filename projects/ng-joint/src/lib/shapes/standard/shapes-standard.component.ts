import { Component, ContentChildren, QueryList } from '@angular/core';

import { DiaGraphElement } from '../../dia/dia-graph-element';
import { ShapePlugin, ElementShapeComponent, LinkShapeComponent } from '../shapes';
import { ShapesStandardService } from './shapes-standard.service';
import { StandardRectangleComponent, NgJointStandardRectangle } from './rectangle/standard-rectangle.component';
import { StandardLinkComponent, NgJointStandardLink } from './link/standard-link.component';

@Component({
  selector: 'dgwnu-shapes-standard',
  template: `
    <ng-content></ng-content>
    `,
})
export class ShapesStandardComponent implements ShapePlugin {
  @ContentChildren(StandardRectangleComponent) standardRectangles: QueryList<ElementShapeComponent>;
  @ContentChildren(StandardLinkComponent) standardLinks: QueryList<LinkShapeComponent>;

  constructor(private service: ShapesStandardService) { }

  private _graphElement: DiaGraphElement;

  set graphElement(value: DiaGraphElement) {
    this._graphElement = value;
    this.service.createShapes(
      [this.standardRectangles],
      [this.standardLinks],
      this._graphElement
      );
  }

}

export {
  StandardRectangleComponent, NgJointStandardRectangle,
  StandardLinkComponent, NgJointStandardLink
};
