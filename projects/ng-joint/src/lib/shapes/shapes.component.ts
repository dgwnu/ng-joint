import { Component, ContentChild } from '@angular/core';

import { DiaGraphElement } from '../dia/graph/dia-graph';
import { ShapePlugin } from './shapes';
import { ShapesService } from './shapes.service';
import { ShapesStandardComponent } from './standard/shapes-standard.component';
import { ShapesAngularComponent } from './angular/shapes-angular.component';
import { ShapesUmlComponent } from './uml/shapes-uml.component';

/**
 * NgJoint Shapes Component
 *
 * Container for ShapePlugin's within DiaGraphElement (ng-joint-dia-graph)
 *
*/
@Component({
  selector: 'ng-joint-shapes',
  template: `
    <ng-content></ng-content>
    `,
})
export class ShapesComponent {
  /** NgJoint Standard Shapes Component Instance */
  @ContentChild(ShapesStandardComponent) shapesStandard: ShapePlugin;

  /** NgJoint Angular Shapes Component Instance */
  @ContentChild(ShapesAngularComponent) shapesAngular: ShapePlugin;

  /** NgJoint UML Shapes Component Instance */
  @ContentChild(ShapesUmlComponent) shapesUml: ShapePlugin;

  constructor(
    private service: ShapesService) { }

  /** @ignore */
  private _graphElement: DiaGraphElement;

  /**
   * Set Parent DiaGraphElement (ng-joint-dia-graph) and activate declared Plugin Shapes
   */
  set graphElement(value: DiaGraphElement) {
    this._graphElement = value;
    this.service.activateShapePlugins(
      [
        this.shapesStandard,
        this.shapesAngular,
        this.shapesUml
      ],
      this._graphElement);
  }

}

export { GenericElementShapeComponent, GenericLinkShapeComponent } from './shapes';
