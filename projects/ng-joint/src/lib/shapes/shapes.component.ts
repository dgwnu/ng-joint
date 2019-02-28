import { Component, ContentChild } from '@angular/core';

import { DiaGraph } from '../dia/graph';
import { ShapePlugin } from './shapes';
import { ShapesService } from './shapes.service';
import { ShapesStandardComponent } from '../schematic-generated/standard';
import { ShapesAngularComponent } from '../schematic-generated/angular';
import { ShapesUmlComponent } from '../schematic-generated/uml';

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
  private _graphInstance: DiaGraph;

  /**
   * Set Parent DiaGraphElement (ng-joint-dia-graph) and activate declared Plugin Shapes
   */
  set graphInstance(graphInstance: DiaGraph) {
    this._graphInstance = graphInstance;
    this.service.activateShapePlugins(
      [
        this.shapesStandard,
        this.shapesAngular,
        this.shapesUml
      ],
      this._graphInstance);
  }

}

export { GenericElementShapeComponent, GenericLinkShapeComponent } from './shapes';
